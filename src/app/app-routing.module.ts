import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHabitatComponent } from './components/add-habitat/add-habitat.component';

const routes: Routes = [
  {path:'add-habitat', component:AddHabitatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
