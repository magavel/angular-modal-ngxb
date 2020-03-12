import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ModalWindowService} from './modal-window.service';


const routes: Routes = [
  {path : '', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ModalWindowService]
})
export class AppRoutingModule { }
