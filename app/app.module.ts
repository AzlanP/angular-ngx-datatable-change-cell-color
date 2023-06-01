import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InitDivDirective } from './init.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgxDatatableModule ],
  declarations: [ AppComponent, HelloComponent,InitDivDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
