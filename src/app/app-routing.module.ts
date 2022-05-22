import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { SendmsgComponent } from './sendmsg/sendmsg.component'

const routes: Routes =[

  {path:'contact', component: ContactComponent },
  {path:'sendmsg', component: SendmsgComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponent = [ContactComponent, SendmsgComponent ]