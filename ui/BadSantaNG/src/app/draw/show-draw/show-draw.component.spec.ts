import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDrawComponent } from './show-draw.component';

describe('ShowDrawComponent', () => {
  let component: ShowDrawComponent;
  let fixture: ComponentFixture<ShowDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
