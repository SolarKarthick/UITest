import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'market-overview',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './market-overview.html',
    styleUrl: './market-overview.scss'
})
export class MarketOverview {
    steps = [
        {
            title: 'Create your account',
            description: 'Register securely and choose whether you plan to invest, apply for funding, or explore both roles over time.'
        },
        {
            title: 'Complete verification',
            description: 'Identity and, where applicable, business or income checks help keep participation trustworthy for everyone.'
        },
        {
            title: 'Connect through the platform',
            description: 'Borrowers submit applications with transparent terms. Investors review opportunities and manage allocated capital.'
        },
        {
            title: 'Track with clarity',
            description: 'Follow application status, account balances, and transaction history from a single dashboard experience.'
        }
    ];
}
