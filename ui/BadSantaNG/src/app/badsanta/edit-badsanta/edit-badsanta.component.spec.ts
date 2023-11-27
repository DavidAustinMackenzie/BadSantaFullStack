import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBadsantaComponent } from './edit-badsanta.component';

describe('EditBadsantaComponent', () => {
  let component: EditBadsantaComponent;
  let fixture: ComponentFixture<EditBadsantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBadsantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBadsantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
