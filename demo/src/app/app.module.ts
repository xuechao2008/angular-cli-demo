import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductionComponent } from './production/production.component';
import { AdminComponent } from './admin/admin.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'production',
        component:ProductionComponent
      }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
