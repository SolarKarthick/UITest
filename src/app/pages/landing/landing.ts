import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { LandingTopbar } from './components/landing-topbar/landing-topbar';
import { HeroSection } from './components/hero-section/hero-section';
import { MarketOverview } from './components/market-overview/market-overview';
import { PlatformHighlights } from './components/platform-highlights/platform-highlights';
import { InvestmentSolutions } from './components/investment-solutions/investment-solutions';
import { TrustSecurity } from './components/trust-security/trust-security';
import { LandingFooter } from './components/landing-footer/landing-footer';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        RouterModule,
        LandingTopbar,
        HeroSection,
        MarketOverview,
        PlatformHighlights,
        InvestmentSolutions,
        TrustSecurity,
        LandingFooter,
        RippleModule,
        StyleClassModule,
        ButtonModule,
        CookieConsentComponent
    ],
    templateUrl: './landing.html',
    styleUrl: './landing.scss',
    encapsulation: ViewEncapsulation.None
})
export class Landing implements OnInit, AfterViewInit, OnDestroy {
    private clickHandler?: (event: MouseEvent) => void;
    private revealObserver?: IntersectionObserver;

    constructor() {}

    ngOnInit() {
        this.clickHandler = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

            if (anchor && anchor.hash) {
                const sectionId = anchor.hash.substring(1);
                if (sectionId && document.getElementById(sectionId)) {
                    event.preventDefault();
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        };
        document.addEventListener('click', this.clickHandler);
    }

    ngAfterViewInit() {
        setTimeout(() => this.initRevealAnimations(), 0);
    }

    private initRevealAnimations(): void {
        if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.landing-reveal').forEach((el) => el.classList.add('is-visible'));
            return;
        }

        this.revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        this.revealObserver?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        document.querySelectorAll('.landing-reveal').forEach((el) => this.revealObserver?.observe(el));
    }

    ngOnDestroy() {
        if (this.clickHandler) {
            document.removeEventListener('click', this.clickHandler);
        }
        this.revealObserver?.disconnect();
    }
}
