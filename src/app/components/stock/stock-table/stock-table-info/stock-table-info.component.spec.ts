import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTableInfoComponent } from './stock-table-info.component';

describe('StockTableInfoComponent', () => {
  let component: StockTableInfoComponent;
  let fixture: ComponentFixture<StockTableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
