import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintureriaComponent } from './pintureria.component';

describe('PintureriaComponent', () => {
  let component: PintureriaComponent;
  let fixture: ComponentFixture<PintureriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PintureriaComponent]
    });
    fixture = TestBed.createComponent(PintureriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
