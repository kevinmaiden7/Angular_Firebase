import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLeccionesComponent } from './registro-lecciones.component';

describe('RegistroLeccionesComponent', () => {
  let component: RegistroLeccionesComponent;
  let fixture: ComponentFixture<RegistroLeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
