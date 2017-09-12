import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExpenseComponent } from './stock-expense.component';

describe('StockExpenseComponent', () => {
  let component: StockExpenseComponent;
  let fixture: ComponentFixture<StockExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
