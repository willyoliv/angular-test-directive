import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button2', component: Button2Component },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
