import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueColumnListComponent } from './value-column-list.component';

describe('ValueColumnListComponent', () => {
  let component: ValueColumnListComponent;
  let fixture: ComponentFixture<ValueColumnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueColumnListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueColumnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
