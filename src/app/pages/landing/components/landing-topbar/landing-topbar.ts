import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';

@Component({
    selector: 'landing-topbar',
    standalone: true,
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, SvgIcon],
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
