import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilleteraComponent } from './billetera.component';

describe('BilleteraComponent', () => {
  let component: BilleteraComponent;
  let fixture: ComponentFixture<BilleteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilleteraComponent]
    });
    fixture = TestBed.createComponent(BilleteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
