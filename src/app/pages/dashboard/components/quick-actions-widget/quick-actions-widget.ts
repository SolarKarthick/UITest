import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { TranslatePipe } from '@ngx-translate/core';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';

@Component({
  selector: 'app-quick-actions-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, RippleModule, TranslatePipe, SvgIcon],
  templateUrl: './quick-actions-widget.html',
  styleUrl: './quick-actions-widget.scss'
})
export class QuickActionsWidget {
  actions: any = [
    {
      label: 'Pay-in',
      desc: 'Add funds to your account',
      path: '/app/page/deposit',
      svg: 'pay-in',
      accentClass: 'qa-deposit'
    },
    {
      label: 'Pay-out',
      desc: 'Cash out available balance',
      path: '/app/page/withdraw',
      svg: 'pay-out',
      accentClass: 'qa-withdraw'
    },
    {
      label: 'Invest',
      desc: 'Continue market participation',
      path: '/app/page/spot-trade',
      svg: 'chart',
      accentClass: 'qa-invest'
    },
    {
      label: 'Support',
      desc: 'Get help with your account',
      path: '/app/page/support',
      svg: 'support',
      accentClass: 'qa-support'
    }
  ];

  constructor(private router: Router) {}

  goTo(path: any): void {
    this.router.navigate([path]);
  }
}
