import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadsantaComponent } from './badsanta/badsanta.component';
import { DrawComponent } from './draw/draw.component';
import { AddBadsantaComponent } from './badsanta/add-badsanta/add-badsanta.component';
import { AdminDrawComponent } from './admin-draw/admin-draw.component';

const routes: Routes = [
  {path:'',component:AddBadsantaComponent},
  {path:'add-badsanta',component:AddBadsantaComponent},
  {path:'badsanta',component:BadsantaComponent},
  {path:'draw',component:DrawComponent},
  {path:'admin-draw',component:AdminDrawComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
