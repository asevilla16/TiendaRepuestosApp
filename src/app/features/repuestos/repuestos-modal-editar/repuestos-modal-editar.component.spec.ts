import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosModalEditarComponent } from './repuestos-modal-editar.component';

describe('RepuestosModalEditarComponent', () => {
  let component: RepuestosModalEditarComponent;
  let fixture: ComponentFixture<RepuestosModalEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosModalEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosModalEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
