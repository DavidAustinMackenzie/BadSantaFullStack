import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditBadsantaComponent } from './admin-edit-badsanta.component';

describe('AdminEditBadsantaComponent', () => {
  let component: AdminEditBadsantaComponent;
  let fixture: ComponentFixture<AdminEditBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
