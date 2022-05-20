import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ContactComponent } from './contact/contact.component';
import { SendmsgComponent } from './sendmsg/sendmsg.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactComponent,SendmsgComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
