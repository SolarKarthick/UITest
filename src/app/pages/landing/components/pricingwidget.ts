import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'pricing-widget',
    imports: [CommonModule, ButtonModule, RippleModule, RouterModule],
    templateUrl: './pricingwidget.html'
})
export class PricingWidget {
    participationPoints = [
        {
            icon: 'pi pi-sitemap',
            title: 'Choose your participation',
            description: 'Open an account and allocate capital toward multi market investment activity managed on the platform.'
        },
        {
            icon: 'pi pi-sync',
            title: 'Market driven activity',
            description: 'Strategies respond to fluctuations and opportunities across commodities, crypto, and additional markets over time.'
        },
        {
            icon: 'pi pi-eye',
            title: 'Track with transparency',
            description: 'Follow account activity clearly. Outcomes depend on market conditions and trading activity, not fixed packages.'
        }
    ];

    referralCards = [
        {
            title: 'Share your referral',
            description: 'Invite others using your personal referral ID or referral link from your account dashboard.',
            image: 'assets/demo/images/landing/pricing/share-your-referral.jpg'
        },
        {
            title: 'Referral Instant Reward',
            description: 'Eligible referrals can unlock an instant reward based on the referred user’s qualifying investment, subject to program rules.',
            image: 'assets/demo/images/landing/pricing/referral-instant-reward.jpg'
        },
        {
            title: 'Transparent tracking',
            description: 'Follow referral activity in your account so invites and rewards remain easy to understand.',
            image: 'assets/demo/images/landing/pricing/transparent-tracking.jpg'
        }
    ];
}
