import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBadsantaComponent } from './show-badsanta.component';

describe('ShowBadsantaComponent', () => {
  let component: ShowBadsantaComponent;
  let fixture: ComponentFixture<ShowBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
