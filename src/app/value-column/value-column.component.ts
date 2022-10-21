import { ValueColumnSortService } from './../value-column-sort.service';
import { Component, OnInit, Input } from '@angular/core';
import { ValueColumn } from "../models/value-column.model";


@Component({
  selector: 'app-value-column',
  templateUrl: './value-column.component.html',
  styleUrls: ['./value-column.component.scss']
})
export class ValueColumnComponent implements OnInit {
  @Input() valueColumn!: ValueColumn;


  constructor(private valueColumnService: ValueColumnSortService) { }


  ngOnInit(): void {
    console.log(this.valueColumn.id);
  }

}
