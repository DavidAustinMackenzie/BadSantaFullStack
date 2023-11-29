import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowBadsantaComponent } from './admin-show-badsanta.component';

describe('AdminShowBadsantaComponent', () => {
  let component: AdminShowBadsantaComponent;
  let fixture: ComponentFixture<AdminShowBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminShowBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminShowBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
