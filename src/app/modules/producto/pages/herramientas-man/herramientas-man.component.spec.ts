import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasManComponent } from './herramientas-man.component';

describe('HerramientasManComponent', () => {
  let component: HerramientasManComponent;
  let fixture: ComponentFixture<HerramientasManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerramientasManComponent]
    });
    fixture = TestBed.createComponent(HerramientasManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
