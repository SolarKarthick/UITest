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
            title: 'Diversified Market Access',
            description:
                'Opportunities across commodities, cryptocurrencies, and future markets  so participation is not limited to a single asset class.',
            image: 'assets/demo/images/landing/highlights/Gateway.png'
        },
        {
            title: 'Active Market Monitoring',
            description:
                'Strategies are guided by ongoing market observation, helping respond when conditions and opportunities shift.',
            image: 'assets/demo/images/landing/highlights/chart.png'
        },
        {
            title: 'Fluctuation Based Management',
            description:
                'Investment activity is managed around price movements and market opportunities rather than fixed return schedules.',
            image: 'assets/demo/images/landing/highlights/system-flow.png'
        }
    ];
}
