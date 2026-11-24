import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TopbarWidget } from './components/topbarwidget.component';
import { HeroWidget } from './components/herowidget';
import { FeaturesWidget } from './components/featureswidget';
import { HighlightsWidget } from './components/highlightswidget';
import { PricingWidget } from './components/pricingwidget';
import { FooterWidget } from './components/footerwidget';
import { CookieConsentDialog } from './components/cookie-consent-dialog/cookie-consent-dialog';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        RouterModule,
        TopbarWidget,
        HeroWidget,
        FeaturesWidget,
        HighlightsWidget,
        PricingWidget,
        FooterWidget,
        RippleModule,
        StyleClassModule,
        ButtonModule,
        DividerModule,
        CookieConsentDialog
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
