import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRepuestoComponent } from './editar-repuesto.component';

describe('EditarRepuestoComponent', () => {
  let component: EditarRepuestoComponent;
  let fixture: ComponentFixture<EditarRepuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRepuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
