import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ngauth0LibModule } from 'ngauth0-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ngauth0LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
