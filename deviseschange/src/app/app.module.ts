import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convertFD.pipe';
import { ConvertPipeFE } from './convertFE.pipe';
import { ConvertPipeDE } from './convertDE.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ConvertPipeFE,
    ConvertPipeDE
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
