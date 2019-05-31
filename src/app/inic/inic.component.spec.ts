import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicComponent } from './inic.component';

describe('InicComponent', () => {
  let component: InicComponent;
  let fixture: ComponentFixture<InicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
