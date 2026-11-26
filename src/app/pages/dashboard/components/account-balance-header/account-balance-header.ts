import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-account-balance-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-balance-header.html',
  styleUrl: './account-balance-header.scss'
})
export class AccountBalanceHeader {
  data: any = DEMO;

  todayInvestmentReturn: any = this.data.todayInvestmentReturn;
  todayReferralIncome: any = this.data.todayReferralIncome;
  mainBalance: any = this.data.mainBalance;
  availableBalance: any = this.data.availableBalance;
  totalDeposits: any = this.data.totalDeposits;
  totalWithdrawals: any = this.data.totalWithdrawals;

  get todayTotalEarnings(): any {
    return this.todayInvestmentReturn + this.todayReferralIncome;
  }

  formatSigned(value: any): any {
    const n = Number(value) || 0;
    const abs = Math.abs(n).toFixed(2);
    return n >= 0 ? `+$${abs}` : `-$${abs}`;
  }
}
