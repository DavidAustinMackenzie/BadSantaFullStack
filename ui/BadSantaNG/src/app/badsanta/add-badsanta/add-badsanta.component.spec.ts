import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBadsantaComponent } from './add-badsanta.component';

describe('AddBadsantaComponent', () => {
  let component: AddBadsantaComponent;
  let fixture: ComponentFixture<AddBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
