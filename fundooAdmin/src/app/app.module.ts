import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { SamplecomponentComponent } from './components/samplecomponent/samplecomponent.component';
import { EmptyComponent } from './components/empty/empty.component';

const routes:Routes =[
  {path:'',component:AdminComponent},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  // {path:'list',component:ListComponent},
  // {path:'empty',component:EmptyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ListComponent,
    SamplecomponentComponent,
    EmptyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
