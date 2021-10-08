import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from '../share/components/navbar/navbar.component';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
  ]
})
export class PageModule { }
