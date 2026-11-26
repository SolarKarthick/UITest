import { Component } from '@angular/core';
import { AccountBalanceHeader } from './components/account-balance-header/account-balance-header';
import { LimitProgressWidget } from './components/limit-progress-widget/limit-progress-widget';
import { EarningsRewardsWidget } from './components/earnings-rewards-widget/earnings-rewards-widget';
import { ReferralOverviewWidget } from './components/referral-overview-widget/referral-overview-widget';
import { RecentTransactionsWidget } from './components/recent-transactions-widget/recent-transactions-widget';
import { QuickActionsWidget } from './components/quick-actions-widget/quick-actions-widget';

@Component({
  selector: 'app-dashboard',
  imports: [
    AccountBalanceHeader,
    LimitProgressWidget,
    EarningsRewardsWidget,
    ReferralOverviewWidget,
    RecentTransactionsWidget,
    QuickActionsWidget
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {}
