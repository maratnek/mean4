import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIncomeComponent } from './stock-income.component';

describe('StockIncomeComponent', () => {
  let component: StockIncomeComponent;
  let fixture: ComponentFixture<StockIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
