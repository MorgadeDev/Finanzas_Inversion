import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaComponent } from './moneda.component';

describe('MonedaComponent', () => {
  let component: MonedaComponent;
  let fixture: ComponentFixture<MonedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonedaComponent]
    });
    fixture = TestBed.createComponent(MonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
