import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIncidenteComponent } from './info-incidente.component';

describe('InfoIncidenteComponent', () => {
  let component: InfoIncidenteComponent;
  let fixture: ComponentFixture<InfoIncidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoIncidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
