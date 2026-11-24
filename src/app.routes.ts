import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { CapDetail } from './app/pages/dashboard/pages/cap-detail/cap-detail';
import { EarningsDetail } from './app/pages/dashboard/pages/earnings-detail/earnings-detail';
import { ReferralDetail } from './app/pages/dashboard/pages/referral-detail/referral-detail';
import { TransactionsDetail } from './app/pages/dashboard/pages/transactions-detail/transactions-detail';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Crud } from '@/pages/crud/crud';

export const appRoutes: Routes = [
    {path:"",component:Landing ,data:{title:"landingPage",desc:"this page all bout user landing page" }},
    {
        path: 'app',
        component: AppLayout,
        children: [
            { path: '', redirectTo:'dashboard', pathMatch:"full" },
            { path: 'dashboard', component: Dashboard },
            { path: 'detail/cap', component: CapDetail },
            { path: 'detail/earnings', component: EarningsDetail },
            { path: 'detail/referrals', component: ReferralDetail },
            { path: 'detail/transactions', component: TransactionsDetail },
            {
                path: 'detail/pay-in',
                component: TransactionsDetail,
                data: {
                    txType: 'Pay-in',
                    title: 'Pay-in',
                    subtitle: 'All funds added to your account.'
                }
            },
            {
                path: 'detail/pay-out',
                component: TransactionsDetail,
                data: {
                    txType: 'Pay-out',
                    title: 'Pay-out',
                    subtitle: 'All withdrawals from your available balance.'
                }
            },
            {
                path: 'detail/returns',
                component: TransactionsDetail,
                data: {
                    txType: 'Investment Return',
                    title: 'Returns',
                    subtitle: 'Investment return credits from your capital.'
                }
            },
            {
                path: 'detail/referral-earnings',
                component: TransactionsDetail,
                data: {
                    txType: 'Referral Earnings',
                    title: 'Referral Earnings',
                    subtitle: 'Income credited from your referral network.'
                }
            },
            {path:'crud',component:Crud},
            { path: 'page', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'admin', loadChildren: () => import('./app/pages/admin/admin.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    // { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
