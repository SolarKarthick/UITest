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
    features = [
        {
            title: 'Tight Spreads',
            description:
                'Competitive spreads designed for clearer entry and exit pricing across multi market investment activity.',
            image: 'assets/demo/images/landing/features/tight-spreads.png'
        },
        {
            title: 'Real Market Prices',
            description:
                'Strategies and participation reflect live market conditions, so pricing stays aligned with actual market movement.',
            image: 'assets/demo/images/landing/features/real-market-prices.png'
        },
        {
            title: 'Low Cost Investing',
            description:
                'Straightforward pricing with transparent fee information no hidden charges that obscure how your capital is used.',
            image: 'assets/demo/images/landing/features/low-cost.png'
        },
        {
            title: 'Fast Withdrawals',
            description:
                'Request withdrawals easily through a clear, fee aware process so you can move funds with simple account controls.',
            image: 'assets/demo/images/landing/features/super-fast-withdrawals.png'
        }
    ];
}
