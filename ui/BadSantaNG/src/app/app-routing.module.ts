import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadsantaComponent } from './badsanta/badsanta.component';
import { DrawComponent } from './draw/draw.component';

const routes: Routes = [
  {path:'badsanta',component:BadsantaComponent},
  {path:'draw',component:DrawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
