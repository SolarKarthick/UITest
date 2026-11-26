import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';

@Component({
    selector: 'platform-highlights',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, RippleModule, SvgIcon],
    templateUrl: './platform-highlights.html',
    styleUrl: './platform-highlights.scss'
})
export class PlatformHighlights {
    highlights = [
        {
            svg: 'id-card',
            title: 'Identity verification',
            description:
                'Account holders complete identity checks so participation on the platform is tied to verified profiles.'
        },
        {
            svg: 'wallet',
            title: 'Transparent financial information',
            description:
                'Balances, application details, and transaction history are presented in plain language so you can follow activity clearly.'
        },
        {
            svg: 'users',
            title: 'Investor & borrower tools',
            description:
                'Dedicated experiences for allocating capital and submitting funding applications — without mixing the two journeys.'
        },
        {
            svg: 'alert',
            title: 'Risk awareness',
            description:
                'Disclosures explain that returns, repayment, and capital outcomes are not guaranteed and depend on real-world conditions.'
        },
        {
            svg: 'lock',
            title: 'Security-focused design',
            description:
                'Secure sign-in flows, encrypted connections, and privacy-minded account access protect personal and financial data.'
        },
        {
            svg: 'mobile',
            title: 'Modern digital experience',
            description:
                'A mobile-first interface aligned with the authenticated app, so the landing page and dashboard feel like one product.'
        }
    ];
}
