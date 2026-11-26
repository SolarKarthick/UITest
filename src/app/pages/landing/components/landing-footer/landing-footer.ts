import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface InfoItem {
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
    selectedInfo: InfoItem | null = null;

    private infoMap: Record<string, InfoItem> = {
        about: {
            title: 'About Aurexion',
            body: 'Aurexion is a peer-to-peer investment platform designed to connect investors and borrowers with verification, transparent account tools, and clear risk communication. Product features continue to evolve based on user needs and compliance requirements.'
        },
        risk: {
            title: 'Risk disclosures',
            body: 'Peer-to-peer investing involves credit and market risk. Investors may lose some or all of their capital. Borrowers remain responsible for obligations under accepted terms. Aurexion does not guarantee returns, repayment schedules, or capital preservation.'
        }
    };

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
