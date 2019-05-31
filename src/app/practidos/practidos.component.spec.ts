import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractidosComponent } from './practidos.component';

describe('PractidosComponent', () => {
  let component: PractidosComponent;
  let fixture: ComponentFixture<PractidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
