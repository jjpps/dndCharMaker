import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { ChoseRaceComponent } from './create-sheet/chose-race/chose-race.component';



@NgModule({
  declarations: [AppComponent, SheetComponent, CreateSheetComponent, ChoseRaceComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
