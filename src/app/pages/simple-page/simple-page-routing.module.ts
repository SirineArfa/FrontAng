import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimplePageComponent} from './simple-page.component';

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent,
    data: {
      breadcrumb: 'About us',
      icon: 'icofont-justify-all bg-c-green',
      //breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sample Page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimplePageRoutingModule { }
