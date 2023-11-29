import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditDrawComponent } from './admin-add-edit-draw.component';

describe('AdminAddEditDrawComponent', () => {
  let component: AdminAddEditDrawComponent;
  let fixture: ComponentFixture<AdminAddEditDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddEditDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddEditDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
