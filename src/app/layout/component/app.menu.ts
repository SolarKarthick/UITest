import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { LayoutService } from '../service/layout.service';
import { AvatarModule } from 'primeng/avatar';
import { TranslatePipe } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Authservice } from '../../pages/auth/service/authservice';
import { menuSvg } from './app.menu-svgs';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule, AvatarModule, TranslatePipe],
    templateUrl: './app.menu.html',
    styleUrl: './app.menu.scss'
})
export class AppMenu {
    model: any = [];
    userName: any = '';
    userEmail: any = '';
    userInitial: any = 'U';
    closeSvg: any;

    constructor(
        private layoutService: LayoutService,
        private authService: Authservice,
        private sanitizer: DomSanitizer
    ) {
        this.closeSvg = this.sanitizer.bypassSecurityTrustHtml(menuSvg('close'));
    }

    ngOnInit() {
        this.initMenu();
        this.loadUser();
    }

    initMenu() {
        this.model = [
            {
                label: 'Overview',
                items: [
                    { label: 'Dashboard', svg: 'home', routerLink: ['/app/dashboard'] },
                    { label: 'Earning Cap', svg: 'chart-bar', routerLink: ['/app/detail/cap'] },
                    { label: 'Earnings & Rewards', svg: 'gift', routerLink: ['/app/detail/earnings'] },
                    { label: 'Referral Network', svg: 'user-plus', routerLink: ['/app/detail/referrals'] },
                    { label: 'Transaction History', svg: 'wallet', routerLink: ['/app/detail/transactions'] }
                ]
            },
            {
                label: 'Account',
                items: [
                    { label: 'Pay-in', svg: 'pay-in', routerLink: ['/app/detail/pay-in'] },
                    { label: 'Pay-out', svg: 'pay-out', routerLink: ['/app/detail/pay-out'] },
                    { label: 'Returns', svg: 'chart', routerLink: ['/app/detail/returns'] },
                    { label: 'Referral Earnings', svg: 'referral', routerLink: ['/app/detail/referral-earnings'] },
                ]
            }
        ];

        if (this.authService.isAdmin()) {
            this.model.push({
                label: 'Admin',
                items: [
                    { label: 'User List', svg: 'users', routerLink: ['/app/admin/users'] },
                    { label: 'Create Deposit', svg: 'wallet', routerLink: ['/app/admin/create-deposit'] },
                    { label: 'Send Notification', svg: 'bell', routerLink: ['/app/admin/send-notification'] }
                ]
            });
        }
    }

    closeMenu() {
        this.layoutService.layoutState.update((prev) => ({
            ...prev,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false
        }));
    }

    loadUser() {
        try {
            const parsed = JSON.parse(localStorage.getItem('user') || '{}');
            const user = parsed?.data?.user ?? parsed;
            this.userName = user?.username || user?.name || 'User';
            this.userEmail = user?.email || '';
            this.userInitial = this.userName.charAt(0).toUpperCase();
        } catch {
            this.userName = 'User';
            this.userEmail = '';
            this.userInitial = 'U';
        }
    }
}
