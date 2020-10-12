import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosModalGuardarComponent } from './repuestos-modal-guardar.component';

describe('RepuestosModalGuardarComponent', () => {
  let component: RepuestosModalGuardarComponent;
  let fixture: ComponentFixture<RepuestosModalGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosModalGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosModalGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
