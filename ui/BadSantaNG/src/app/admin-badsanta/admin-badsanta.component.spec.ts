import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBadsantaComponent } from './admin-badsanta.component';

describe('AdminBadsantaComponent', () => {
  let component: AdminBadsantaComponent;
  let fixture: ComponentFixture<AdminBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
