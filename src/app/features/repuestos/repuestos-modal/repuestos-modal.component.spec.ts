import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosModalComponent } from './repuestos-modal.component';

describe('RepuestosModalComponent', () => {
  let component: RepuestosModalComponent;
  let fixture: ComponentFixture<RepuestosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
