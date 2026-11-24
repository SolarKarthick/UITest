/** Simple demo mock for investment dashboard (hardcoded). */
export const DEMO: any = {
  mainBalance: 2800,
  availableBalance: 2300,
  totalDeposits: 2000,
  totalWithdrawals: 500,

  todayInvestmentReturn: 28.5,
  todayReferralIncome: 12.25,

  maxPotential: 4000,
  rewardsReceived: 1484,
  remainingPotential: 2516,

  totalRoiEarnings: 1000,
  totalReferralEarnings: 320,
  instantReferralReward: 64,
  welcomeBonus: 100,

  totalReferralUsers: 5,
  activeReferralUsers: 3,
  referralCode: 'AUREX-9281',
  referralLink: 'https://aurexion.app/r/AUREX-9281',

  /** Credits counted toward Maximum Potential (pay-in × 2). */
  capCredits: [
    { date: '2026-11-01', source: 'Welcome Bonus', amount: 100, runningTotal: 100 },
    { date: '2026-11-05', source: 'Investment Return', amount: 210, runningTotal: 310 },
    { date: '2026-11-10', source: 'Referral Team Income', amount: 80, runningTotal: 390 },
    { date: '2026-11-12', source: 'Instant Referral Reward', amount: 16, runningTotal: 406 },
    { date: '2026-11-15', source: 'Investment Return', amount: 320, runningTotal: 726 },
    { date: '2026-11-18', source: 'Referral Team Income', amount: 120, runningTotal: 846 },
    { date: '2026-11-18', source: 'Instant Referral Reward', amount: 24, runningTotal: 870 },
    { date: '2026-11-20', source: 'Investment Return', amount: 280, runningTotal: 1150 },
    { date: '2026-11-22', source: 'Referral Team Income', amount: 120, runningTotal: 1270 },
    { date: '2026-11-22', source: 'Instant Referral Reward', amount: 24, runningTotal: 1294 },
    { date: '2026-11-23', source: 'Investment Return', amount: 190, runningTotal: 1484 }
  ],

  earningsBreakdown: [
    { label: 'Investment Return', amount: 1000, note: 'Daily ROI credited from own capital' },
    { label: 'Referral Team Income', amount: 320, note: 'Income from referral-team activity' },
    { label: 'Instant Referral Reward', amount: 64, note: '20% of eligible referral income' },
    { label: 'Welcome Bonus', amount: 100, note: 'Promotional credit' }
  ],

  activity: [
    { label: 'Last Pay-in', amount: 2000, date: '2026-11-20 14:32', svg: 'pay-in', tone: 'positive' },
    { label: 'Last Pay-out', amount: 500, date: '2026-11-18 09:15', svg: 'pay-out', tone: 'neutral' }
  ],

  transactions: [
    { id: 'TXN-98421', type: 'Investment Return', amount: 42.75, date: '2026-11-23', status: 'Completed' },
    { id: 'TXN-98408', type: 'Referral Earnings', amount: 18.5, date: '2026-11-23', status: 'Completed' },
    { id: 'TXN-98390', type: 'Pay-in', amount: 2000, date: '2026-11-20', status: 'Completed' },
    { id: 'TXN-98351', type: 'Pay-out', amount: 500, date: '2026-11-18', status: 'Completed' },
    { id: 'TXN-98312', type: 'Investment Return', amount: 39.1, date: '2026-11-17', status: 'Completed' },
    { id: 'TXN-98288', type: 'Referral Earnings', amount: 12.25, date: '2026-11-16', status: 'Pending' },
    { id: 'TXN-98240', type: 'Investment Return', amount: 35.4, date: '2026-11-14', status: 'Completed' },
    { id: 'TXN-98201', type: 'Pay-out', amount: 150, date: '2026-11-12', status: 'Completed' },
    { id: 'TXN-98170', type: 'Referral Earnings', amount: 22.0, date: '2026-11-10', status: 'Completed' },
    { id: 'TXN-98155', type: 'Investment Return', amount: 28.5, date: '2026-11-08', status: 'Completed' },
    { id: 'TXN-98120', type: 'Pay-in', amount: 500, date: '2026-11-05', status: 'Completed' },
    { id: 'TXN-98090', type: 'Pay-out', amount: 75, date: '2026-11-03', status: 'Completed' },
    { id: 'TXN-98060', type: 'Referral Earnings', amount: 9.75, date: '2026-11-02', status: 'Completed' },
    { id: 'TXN-98030', type: 'Pay-in', amount: 300, date: '2026-10-28', status: 'Completed' }
  ],

  referralUsers: [
    { name: 'Aisha Khan', email: 'aisha.k@email.com', joinedDate: '2026-10-12', status: 'Active', referralIncome: 126.4, theirPayIn: 1500 },
    { name: 'Daniel Cruz', email: 'daniel.c@email.com', joinedDate: '2026-10-28', status: 'Active', referralIncome: 98.75, theirPayIn: 1200 },
    { name: 'Mei Lin', email: 'mei.lin@email.com', joinedDate: '2026-11-02', status: 'Pending', referralIncome: 0, theirPayIn: 0 },
    { name: 'Omar Hassan', email: 'omar.h@email.com', joinedDate: '2026-11-08', status: 'Active', referralIncome: 54.2, theirPayIn: 800 },
    { name: 'Sofia Ruiz', email: 'sofia.r@email.com', joinedDate: '2026-11-14', status: 'Inactive', referralIncome: 22.1, theirPayIn: 300 }
  ]
};
