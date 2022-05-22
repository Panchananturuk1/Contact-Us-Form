import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ContactComponent } from './contact/contact.component';
import { SendmsgComponent } from './sendmsg/sendmsg.component';
import { AppRoutingModule, routingComponent } from './app-routing.module'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ContactComponent,
    SendmsgComponent,
    routingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
