import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { CookieConsent } from '@/pages/service/cookie/cookie-consent';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';

@Component({
    selector: 'cookie-consent',
    standalone: true,
    imports: [ButtonModule, DrawerModule, CommonModule, SvgIcon],
    templateUrl: './cookie-consent.html',
    styleUrl: './cookie-consent.scss'
})
export class CookieConsentComponent implements OnInit {
    visible = true;
    visibleDrawer = false;
    drawerType: 'policy' | 'customize' | '' = '';

    constructor(private cookieService: CookieConsent) {}

    ngOnInit() {
        this.checkConsent();
    }

    checkConsent() {
        const consent = localStorage.getItem('cookieConsent');

        if (consent == 'accepted' || consent == 'rejected') {
            this.visible = false;
        } else {
            this.visible = true;
        }
    }

    openDrawer(type: 'policy' | 'customize') {
        this.drawerType = type;
        this.visibleDrawer = true;
    }

    accept() {
        localStorage.setItem('cookieConsent', 'accepted');
        this.cookieService.sendConsent().subscribe({
            next: (res) => {
                console.log('Success:', res);
                this.visible = false;
            },
            error: (err) => {
                console.error('Error:', err);
                this.visible = false;
            }
        });
    }

    reject() {
        localStorage.setItem('cookieConsent', 'rejected');
        this.visible = false;
    }

    onClose() {
        this.visible = false;
    }
}
