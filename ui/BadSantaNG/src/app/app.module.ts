import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { ShowDrawComponent } from './draw/show-draw/show-draw.component';
import { AddEditDrawComponent } from './draw/add-edit-draw/add-edit-draw.component';
import { BadsantaComponent } from './badsanta/badsanta.component';
import { ShowBadsantaComponent } from './badsanta/show-badsanta/show-badsanta.component';
import { AddBadsantaComponent } from './badsanta/add-badsanta/add-badsanta.component';
import { EditBadsantaComponent } from './badsanta/edit-badsanta/edit-badsanta.component';
import { BadsantaService } from './badsanta.service';
import { DrawService } from './draw.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    ShowDrawComponent,
    AddEditDrawComponent,
    BadsantaComponent,
    ShowBadsantaComponent,
    AddBadsantaComponent,
    EditBadsantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
