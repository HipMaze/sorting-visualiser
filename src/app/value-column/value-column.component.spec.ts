import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueColumnComponent } from './value-column.component';

describe('ValueColumnComponent', () => {
  let component: ValueColumnComponent;
  let fixture: ComponentFixture<ValueColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
