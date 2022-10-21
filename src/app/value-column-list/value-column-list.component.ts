import { ValueColumnSortService } from './../value-column-sort.service';
import { Component, Input, OnInit } from '@angular/core';
import { ValueColumn } from "../models/value-column.model";



@Component({
  selector: 'app-value-column-list',
  templateUrl: './value-column-list.component.html',
  styleUrls: ['./value-column-list.component.scss']
})
export class ValueColumnListComponent implements OnInit {


  @Input() selectedAlgorithm!:string;
  columnList!:ValueColumn[];
  algorithmArray:Array<string>=["mergeSort","bubbleSort","insertionSort","selectionSort","shellSort"];



  constructor(private valueColumnSortService:ValueColumnSortService) { }

  ngOnInit(): void {
  this.columnList=this.valueColumnSortService.generateList();
  }

  onStartSort(){
  switch (this.selectedAlgorithm) {
    case "mergeSort":
      this.columnList=this.valueColumnSortService.mergeSort(this.columnList);
      break;
    case "bubbleSort":
      this.columnList=this.valueColumnSortService.bubbleSortList(this.columnList);
      break;
    case "insertionSort":
      this.columnList=this.valueColumnSortService.insertionSortList(this.columnList);
      break;
    case "selectionSort":
      this.columnList=this.valueColumnSortService.selectionSortList(this.columnList);
      break;
    case "shellSort":
      this.columnList=this.valueColumnSortService.shellSortList(this.columnList);
      break;
    default:
      console.log("this is broken");
      break;
  }
  console.log(this.columnList);
  }

}
