import { Component, HostBinding, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/layout.service';
import { TranslatePipe } from '@ngx-translate/core';
import { menuIconMeta, menuSvg } from './app.menu-svgs';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[app-menuitem]',
    imports: [CommonModule, RouterModule, RippleModule, TranslatePipe],
    template: `
        <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label | translate }}</div>
            <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url" (click)="itemClick($event)" [ngClass]="item.styleClass" [attr.target]="item.target" tabindex="0" pRipple>
                <span class="layout-menuitem-icon menu-svg menu-svg-chip" [attr.data-icon]="iconName(item)" [style.color]="iconColor(item)" [style.background]="iconBg(item)" [innerHTML]="svgHtml(item)"></span>
                <span class="layout-menuitem-text">{{ item.label | translate }}</span>
                <span class="layout-submenu-toggler menu-svg" *ngIf="item.items" [innerHTML]="chevronHtml"></span>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                [ngClass]="item.styleClass"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <span class="layout-menuitem-icon menu-svg menu-svg-chip" [attr.data-icon]="iconName(item)" [style.color]="iconColor(item)" [style.background]="iconBg(item)" [innerHTML]="svgHtml(item)"></span>
                <span class="layout-menuitem-text">{{ item.label | translate }}</span>
                <span class="layout-submenu-toggler menu-svg" *ngIf="item.items" [innerHTML]="chevronHtml"></span>
            </a>

            <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
    animations: [
        trigger('children', [
            state('collapsed', style({ height: '0' })),
            state('expanded', style({ height: '*' })),
            transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
    providers: [LayoutService]
})
export class AppMenuitem {
    @Input() item!: MenuItem;
    @Input() index!: number;
    @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
    @Input() parentKey!: string;

    active = false;
    menuSourceSubscription: Subscription;
    menuResetSubscription: Subscription;
    key: any = '';
    chevronHtml: any;

    constructor(
        public router: Router,
        private layoutService: LayoutService,
        private sanitizer: DomSanitizer
    ) {
        this.chevronHtml = this.sanitizer.bypassSecurityTrustHtml(menuSvg('chevron'));

        this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
            Promise.resolve(null).then(() => {
                if (value.routeEvent) {
                    this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
                } else {
                    if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                        this.active = false;
                    }
                }
            });
        });

        this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
        });
    }

    iconName(item: any): any {
        return item?.svg || item?.icon || 'home';
    }

    iconColor(item: any): any {
        return menuIconMeta(this.iconName(item)).color;
    }

    iconBg(item: any): any {
        return menuIconMeta(this.iconName(item)).bg;
    }

    svgHtml(item: any): any {
        return this.sanitizer.bypassSecurityTrustHtml(menuSvg(this.iconName(item)));
    }

    ngOnInit() {
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    updateActiveStateFromRoute() {
        const activeRoute = this.router.isActive(this.item.routerLink[0], {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored'
        });
        if (activeRoute) {
            this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
        }
    }

    itemClick(event: Event) {
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }
        if (this.item.items) {
            this.active = !this.active;
        }
        this.layoutService.onMenuStateChange({ key: this.key });
    }

    get submenuAnimation() {
        return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
    }

    @HostBinding('class.active-menuitem')
    get activeClass() {
        return this.active && !this.root;
    }

    ngOnDestroy() {
        this.menuSourceSubscription?.unsubscribe();
        this.menuResetSubscription?.unsubscribe();
    }
}
