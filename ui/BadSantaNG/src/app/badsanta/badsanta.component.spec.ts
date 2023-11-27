import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadsantaComponent } from './badsanta.component';

describe('BadsantaComponent', () => {
  let component: BadsantaComponent;
  let fixture: ComponentFixture<BadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
