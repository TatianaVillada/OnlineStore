import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealidadVirtualComponent } from './realidad-virtual.component';

describe('RealidadVirtualComponent', () => {
  let component: RealidadVirtualComponent;
  let fixture: ComponentFixture<RealidadVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealidadVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealidadVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
