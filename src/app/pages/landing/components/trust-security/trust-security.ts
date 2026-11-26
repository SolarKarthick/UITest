import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'trust-security',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        RippleModule,
        Accordion,
        AccordionPanel,
        AccordionHeader,
        AccordionContent
    ],
    templateUrl: './trust-security.html',
    styleUrl: './trust-security.scss'
})
export class TrustSecurity {
    trustItems = [
        {
            icon: 'pi pi-id-card',
            title: 'Identity verification',
            description: 'Participants complete identity checks so marketplace activity is connected to verified accounts.'
        },
        {
            icon: 'pi pi-key',
            title: 'Secure account access',
            description: 'Strong sign-in flows and session controls help reduce unauthorized access to your account.'
        },
        {
            icon: 'pi pi-lock',
            title: 'Data protection',
            description: 'Connections use modern encryption so personal and financial data is protected in transit.'
        },
        {
            icon: 'pi pi-list',
            title: 'Transaction transparency',
            description: 'Account activity and application updates are designed to remain visible and understandable.'
        },
        {
            icon: 'pi pi-eye-slash',
            title: 'Privacy',
            description: 'Portfolio and personal details stay limited to authorized access within your account.'
        },
        {
            icon: 'pi pi-exclamation-triangle',
            title: 'Risk communication',
            description: 'Disclosures explain that capital, returns, and repayment outcomes are not guaranteed.'
        }
    ];

    faqs = [
        {
            question: 'What is Aurexion?',
            answer:
                'Aurexion is a peer-to-peer investment platform that connects investors allocating capital with borrowers seeking funding, supported by verification, account tools, and clear disclosures.'
        },
        {
            question: 'Do you guarantee investment returns?',
            answer:
                'No. Returns, repayment timelines, and capital outcomes are not guaranteed. Peer-to-peer participation involves risk of loss.'
        },
        {
            question: 'How do borrowers get verified?',
            answer:
                'Borrowers complete identity verification and may provide employment, income, or business information where applicable. Requirements can vary by application type.'
        },
        {
            question: 'How do investors track activity?',
            answer:
                'After signing in, investors can use the dashboard for account overview, participation status, and transaction history where available.'
        },
        {
            question: 'Is Aurexion regulated or insured?',
            answer:
                'This landing page does not claim regulatory status, insurance, or certifications. Refer to official product documents and policies for verified legal information.'
        }
    ];
}
