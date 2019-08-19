import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatDividerModule} from '@angular/material';
import {MatTableModule,MatDialogModule,MatTabsModule,MatToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ApprovalRejectComponent } from './components/approval-reject/approval-reject.component';
import { RootComponent } from './components/root/root.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardviewloginComponent } from './components/cardviewlogin/cardviewlogin.component';
import { DialogcomponentComponent } from './components/dialogcomponent/dialogcomponent.component';

const routes:Routes =[
  { path : 'cart', component : CardviewloginComponent , children:[
    { path: 'signup' , component : RegisterComponent}
  ]}
  // {path:'',component:AdminComponent},
  // { path:'root',component:RootComponent,children:[
  //   { path:'dashboard',component:DashboardComponent},
  //   { path:'approve',component:ApprovalRejectComponent}
  // ]}
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
    CardviewloginComponent,
    DialogcomponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),ReactiveFormsModule,FlexLayoutModule,HttpClientModule,
    MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatDividerModule,MatTableModule,MatDialogModule,MatTabsModule,
    MatToolbarModule
  ],
  entryComponents:[DialogcomponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
