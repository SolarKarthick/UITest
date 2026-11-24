import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface TradeInfo {
    title: string;
    body: string;
}

@Component({
    selector: 'footer-widget',
    imports: [RouterModule, DialogModule, ButtonModule],
    templateUrl: './footerwidget.html',
    styles: `
        .landing-footer-link {
            display: block;
            width: 100%;
            text-align: left;
            padding: 0;
            border: 0;
            background: transparent;
            color: #475569;
            font-size: 0.9rem;
            line-height: 1.5;
            cursor: pointer;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .landing-footer-link:hover,
        .landing-footer-link:focus-visible {
            color: #b45309;
            outline: none;
        }
    `
})
export class FooterWidget {
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
