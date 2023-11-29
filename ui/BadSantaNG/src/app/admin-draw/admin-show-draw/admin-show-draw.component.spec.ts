import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowDrawComponent } from './admin-show-draw.component';

describe('AdminShowDrawComponent', () => {
  let component: AdminShowDrawComponent;
  let fixture: ComponentFixture<AdminShowDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminShowDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminShowDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
