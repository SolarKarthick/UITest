import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'hero-section',
    standalone: true,
    imports: [ButtonModule, RippleModule, RouterModule],
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.scss'
})
export class HeroSection {
    scrollToAssets(): void {
        const element = document.getElementById('features') || document.getElementById('assets');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
