import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { Ato4Pipe } from './ato4.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    Ato4Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
