import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadsantaComponent } from './badsanta/badsanta.component';
import { DrawComponent } from './draw/draw.component';
import { AddBadsantaComponent } from './badsanta/add-badsanta/add-badsanta.component';

const routes: Routes = [
  {path:'badsanta',component:BadsantaComponent},
  {path:'draw',component:DrawComponent},
  {path:'add-badsanta',component:AddBadsantaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
