import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDrawComponent } from './admin-draw.component';

describe('AdminDrawComponent', () => {
  let component: AdminDrawComponent;
  let fixture: ComponentFixture<AdminDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
