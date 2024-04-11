import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHabitatComponent } from './components/add-habitat/add-habitat.component';
import { HabitatListComponent } from './components/habitat-list/habitat-list.component';

const routes: Routes = [
  {path:'',component:HabitatListComponent},
  {path:'habitats',component:HabitatListComponent},
  {path:'add-habitat', component:AddHabitatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
