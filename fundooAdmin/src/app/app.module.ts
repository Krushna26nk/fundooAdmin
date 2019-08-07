import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatDividerModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ApprovalRejectComponent } from './components/approval-reject/approval-reject.component';
import { RootComponent } from './components/root/root.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes:Routes =[
  {path:'',component:AdminComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'dashboard',component:DashboardComponent}
  ]},
  {path:'dashboard',component:DashboardComponent},
  { path:'root',component:RootComponent,children:[
    { path:'dashboard',component:DashboardComponent},
    { path:'approve',component:ApprovalRejectComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    RegisterComponent,
    ApprovalRejectComponent,
    RootComponent,
    ButtonsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),ReactiveFormsModule,FlexLayoutModule,HttpClientModule,
    MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatDividerModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
