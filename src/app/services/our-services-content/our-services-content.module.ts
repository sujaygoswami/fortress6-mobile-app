import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OurServicesContentPage } from './our-services-content.page';

const routes: Routes = [
  {
    path: '',
    component: OurServicesContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OurServicesContentPage]
})
export class OurServicesContentPageModule {}
