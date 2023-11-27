import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDrawComponent } from './add-edit-draw.component';

describe('AddEditDrawComponent', () => {
  let component: AddEditDrawComponent;
  let fixture: ComponentFixture<AddEditDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
