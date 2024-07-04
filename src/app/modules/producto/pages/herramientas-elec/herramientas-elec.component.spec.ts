import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasElecComponent } from './herramientas-elec.component';

describe('HerramientasElecComponent', () => {
  let component: HerramientasElecComponent;
  let fixture: ComponentFixture<HerramientasElecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerramientasElecComponent]
    });
    fixture = TestBed.createComponent(HerramientasElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
