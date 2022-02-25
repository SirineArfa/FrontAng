import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { AppointementComponent } from './pages/appointement/appointement.component';
import { FaqComponent } from './pages/faq/faq.component';
import { Doctor1Component } from './pages/doctor1/doctor1.component';
import { Doctor2Component } from './pages/doctor2/doctor2.component';
import { Doctor3Component } from './pages/doctor3/doctor3.component';
import { Doctor4Component } from './pages/doctor4/doctor4.component';
import { Doctor5Component } from './pages/doctor5/doctor5.component';
import { Doctor6Component } from './pages/doctor6/doctor6.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'Home',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      },{
        path: 'userr',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: PaiementComponent,
    children: [
      {
        path: 'paiement',
        loadChildren: () => import('./pages/paiement/paiement.module').then(m => m.PaiementModule)
      }
    ]
  },
  {
    path: '',
    component: AppointementComponent,
    children: [
      {
        path: 'appointement',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app1',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app2',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app3',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app4',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app5',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      },
      {
        path: 'app6',
        loadChildren: () => import('./pages/appointement/appointement.module').then(m => m.AppointementModule)
      }
    ]
  },
  {
    path: '',
    component: FaqComponent,
    children: [
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)
      }
    ]
  },
  {
    path: '',
    component: Doctor1Component,
    children: [
      {
        path: 'profile1',
        loadChildren: () => import('./pages/doctor1/doctor1.module').then(m => m.Doctor1Module)
      }
    ]
  },
  {
    path: '',
    component: Doctor2Component,
    children: [
      {
        path: 'profile2',
        loadChildren: () => import('./pages/doctor2/doctor2.module').then(m => m.Doctor2Module)
      }
    ]
  },
  {
    path: '',
    component: Doctor3Component,
    children: [
      {
        path: 'profile3',
        loadChildren: () => import('./pages/doctor3/doctor3.module').then(m => m.Doctor3Module)
      }
    ]
  },
  {
    path: '',
    component: Doctor4Component,
    children: [
      {
        path: 'profile4',
        loadChildren: () => import('./pages/doctor4/doctor4.module').then(m => m.Doctor4Module)
      }
    ]
  },
  {
    path: '',
    component: Doctor5Component,
    children: [
      {
        path: 'profile5',
        loadChildren: () => import('./pages/doctor5/doctor5.module').then(m => m.Doctor5Module)
      }
    ]
  },
  {
    path: '',
    component: Doctor6Component,
    children: [
      {
        path: 'profile6',
        loadChildren: () => import('./pages/doctor6/doctor6.module').then(m => m.Doctor6Module)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
