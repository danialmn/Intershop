import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './lists/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ListsComponent,
    ListComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
