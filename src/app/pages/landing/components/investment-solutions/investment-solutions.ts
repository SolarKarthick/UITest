import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';

@Component({
    selector: 'investment-solutions',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, RouterModule, TabsModule, SvgIcon],
    templateUrl: './investment-solutions.html',
    styleUrl: './investment-solutions.scss'
})
export class InvestmentSolutions {
    investorFeatures = [
        {
            svg: 'chart-bar',
            title: 'Portfolio overview',
            description: 'See balances and participation status in a dashboard aligned with the authenticated app.'
        },
        {
            svg: 'search',
            title: 'Opportunity review',
            description: 'Explore listings with transparent terms and disclosures before allocating capital.'
        },
        {
            svg: 'history',
            title: 'Transaction history',
            description: 'Follow deposits, allocations, and withdrawals with a clear activity trail.'
        },
        {
            svg: 'alert',
            title: 'Risk disclosures',
            description: 'Plain-language reminders that returns and repayment are never guaranteed.'
        }
    ];

    borrowerSteps = [
        {
            title: 'Create & verify',
            description: 'Open an account and complete identity verification so your application is tied to a verified profile.'
        },
        {
            title: 'Share required details',
            description: 'Provide employment, income, or business information where applicable to support a fair review.'
        },
        {
            title: 'Submit & track',
            description: 'Send your application, monitor status updates, and review any offered terms before accepting.'
        }
    ];

    verificationItems = [
        {
            svg: 'id-card',
            title: 'Identity verification',
            description: 'Confirm who you are so the platform can maintain a trusted marketplace for all participants.'
        },
        {
            svg: 'briefcase',
            title: 'Employment & income',
            description: 'Where required, share supporting details that help assess capacity and application context.'
        },
        {
            svg: 'building',
            title: 'Business verification',
            description: 'Business applicants may complete additional checks so entity details stay accurate and transparent.'
        }
    ];
}
