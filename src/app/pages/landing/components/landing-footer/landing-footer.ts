import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface TradeInfo {
    title: string;
    body: string;
}

@Component({
    selector: 'landing-footer',
    standalone: true,
    imports: [RouterModule, DialogModule, ButtonModule],
    templateUrl: './landing-footer.html',
    styleUrl: './landing-footer.scss'
})
export class LandingFooter {
    showDialog = false;
    selectedInfo: TradeInfo | null = null;

    private infoMap: Record<string, TradeInfo> = {
        spot: {
            title: 'Active market strategies',
            body: 'Aurexion manages investment activity based on market fluctuations and opportunities across supported markets. Outcomes depend on conditions and trading activity. Profits and timelines are never guaranteed.'
        },
        ai: {
            title: 'Crypto markets',
            body: 'Participate in digital asset opportunities such as Bitcoin, Ethereum, and Solana. Crypto markets can be highly volatile. Only invest capital you can afford to risk.'
        },
        commodity: {
            title: 'Commodity markets',
            body: 'Access commodity categories such as gold, oil, and diamonds for diversification. Commodity prices respond to supply, demand, inflation, and geopolitics, and can decline as well as rise.'
        },
        events: {
            title: 'Future markets',
            body: 'The platform is designed to expand into additional financial markets over time, such as Forex. New markets will follow the same risk aware, non guaranteed participation approach.'
        }
    };

    constructor(public router: Router) {}

    openInfo(key: string): void {
        this.selectedInfo = this.infoMap[key] ?? null;
        this.showDialog = true;
    }

    scrollToSection(event: Event, sectionId: string): void {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
