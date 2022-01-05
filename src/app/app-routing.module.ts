import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'sheet', component: SheetComponent },
  { path: 'CreateSheet', component: CreateSheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
