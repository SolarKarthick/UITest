import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'platform-highlights',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
    templateUrl: './platform-highlights.html',
    styleUrl: './platform-highlights.scss'
})
export class PlatformHighlights {
    highlights = [
        {
            icon: 'pi pi-id-card',
            title: 'Identity verification',
            description:
                'Account holders complete identity checks so participation on the platform is tied to verified profiles.',
            image: 'assets/demo/images/landing/generated/landing-identity-verify.jpg'
        },
        {
            icon: 'pi pi-wallet',
            title: 'Transparent financial information',
            description:
                'Balances, application details, and transaction history are presented in plain language so you can follow activity clearly.',
            image: 'assets/demo/images/landing/generated/landing-transparent-finance.jpg'
        },
        {
            icon: 'pi pi-users',
            title: 'Investor & borrower tools',
            description:
                'Dedicated experiences for allocating capital and submitting funding applications — without mixing the two journeys.',
            image: 'assets/demo/images/landing/generated/landing-dual-tools.jpg'
        },
        {
            icon: 'pi pi-exclamation-triangle',
            title: 'Risk awareness',
            description:
                'Disclosures explain that returns, repayment, and capital outcomes are not guaranteed and depend on real-world conditions.',
            image: 'assets/demo/images/landing/generated/landing-risk-awareness.jpg'
        },
        {
            icon: 'pi pi-shield',
            title: 'Security-focused design',
            description:
                'Secure sign-in flows, encrypted connections, and privacy-minded account access protect personal and financial data.',
            image: 'assets/demo/images/landing/generated/landing-security-trust.jpg'
        },
        {
            icon: 'pi pi-mobile',
            title: 'Modern digital experience',
            description:
                'A mobile-first interface aligned with the authenticated app, so the landing page and dashboard feel like one product.',
            image: 'assets/demo/images/landing/generated/landing-mobile-experience.jpg'
        }
    ];
}
