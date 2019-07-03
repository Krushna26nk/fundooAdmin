import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes:Routes =[
  {path:'',component:AdminComponent},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
