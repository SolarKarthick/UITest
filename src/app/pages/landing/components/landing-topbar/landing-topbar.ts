import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'landing-topbar',
    standalone: true,
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    templateUrl: './landing-topbar.html',
    styleUrl: './landing-topbar.scss'
})
export class LandingTopbar {
    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
