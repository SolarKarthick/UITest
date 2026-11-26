import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'investment-solutions',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, RouterModule, TabsModule],
    templateUrl: './investment-solutions.html',
    styleUrl: './investment-solutions.scss'
})
export class InvestmentSolutions {
    investorFeatures = [
        {
            icon: 'pi pi-chart-bar',
            title: 'Portfolio overview',
            description: 'See balances and participation status in a dashboard aligned with the authenticated app.'
        },
        {
            icon: 'pi pi-search',
            title: 'Opportunity review',
            description: 'Explore listings with transparent terms and disclosures before allocating capital.'
        },
        {
            icon: 'pi pi-history',
            title: 'Transaction history',
            description: 'Follow deposits, allocations, and withdrawals with a clear activity trail.'
        },
        {
            icon: 'pi pi-exclamation-circle',
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
            icon: 'pi pi-id-card',
            title: 'Identity verification',
            description: 'Confirm who you are so the platform can maintain a trusted marketplace for all participants.',
            image: 'assets/demo/images/landing/generated/landing-identity-verify.jpg'
        },
        {
            icon: 'pi pi-briefcase',
            title: 'Employment & income',
            description: 'Where required, share supporting details that help assess capacity and application context.',
            image: 'assets/demo/images/landing/generated/landing-borrowers.jpg'
        },
        {
            icon: 'pi pi-building',
            title: 'Business verification',
            description: 'Business applicants may complete additional checks so entity details stay accurate and transparent.',
            image: 'assets/demo/images/landing/generated/landing-transparent-finance.jpg'
        }
    ];
}
