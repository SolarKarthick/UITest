import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'trust-security',
    standalone: true,
    imports: [RouterModule, ButtonModule, RippleModule],
    templateUrl: './trust-security.html',
    styleUrl: './trust-security.scss'
})
export class TrustSecurity {}
