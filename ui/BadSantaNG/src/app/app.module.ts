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
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { AdminBadsantaComponent } from './admin-badsanta/admin-badsanta.component';
import { AdminDrawComponent } from './admin-draw/admin-draw.component';
import { AdminShowDrawComponent } from './admin-draw/admin-show-draw/admin-show-draw.component';
import { AdminAddEditDrawComponent } from './admin-draw/admin-add-edit-draw/admin-add-edit-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    ShowDrawComponent,
    AddEditDrawComponent,
    BadsantaComponent,
    ShowBadsantaComponent,
    AddBadsantaComponent,
    EditBadsantaComponent,
    AdminBadsantaComponent,
    AdminDrawComponent,
    AdminShowDrawComponent,
    AdminAddEditDrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
