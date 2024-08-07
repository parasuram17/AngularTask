import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class UnauthorizedModule { }
