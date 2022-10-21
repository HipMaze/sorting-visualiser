import { ValueColumn } from './models/value-column.model';
import { Injectable } from '@angular/core';

/*
List of sorting algorithms implemented:
  - mergeSort
  - bubbleSort
  - insertionSort
  - selectionSort
  - shellSort
*/

@Injectable({
  providedIn: 'root'
})
export class ValueColumnSortService {

  constructor() { }

  private getRandomArbitrary(min:number, max:number) {//random number
    return Math.floor(Math.random() * (max - min) + min);
  }
  private merge(left:ValueColumn[], right:ValueColumn[]):ValueColumn[]{//merge two arrays
    const array:ValueColumn[] = [];
    let lIndex=0;
    let rIndex=0;

    while (lIndex + rIndex < left.length + right.length){
      const lItem = left[lIndex];
      const rItem = right[rIndex];

      if(lItem == null){
        array.push(rItem);
        rIndex++;
      }
      else if(rItem == null){
        array.push(lItem);
        lIndex++;
      }
      else if(lItem.value < rItem.value){
        array.push(lItem);
        lIndex++;
      }
      else{
        array.push(rItem);
        rIndex++;
      }
    }
    return array;
  }

//the utility functions are private. the functional ones are public


  public generateList():ValueColumn[]{//generate a random size (4,10) list of random values (1,50)
    let upperLimit=this.getRandomArbitrary(4,10);
    let array:ValueColumn[]=new Array();
    for (let i = 0; i < upperLimit; i++) {
      array.push({id:i+1,value:this.getRandomArbitrary(1,50)});
    }
    console.log(array);
    return array;
  }

  public bubbleSortList(arr:ValueColumn[]):ValueColumn[]{
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j].value > arr[j + 1].value) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
  }

  public mergeSort(array:ValueColumn[]):ValueColumn[]{
    if(array.length <=1){
      return array;
    }

    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log(array);
    console.log(left);
    console.log(right);
    return this.merge(this.mergeSort(left),this.mergeSort(right));
  }

  public insertionSortList(arr: ValueColumn[]):ValueColumn[]{
       // Iterate the array (0..n)
       for(let i = 0; i < arr.length; i++)
       {
           const tmp = arr[i];
           let j = i - 1;
           // Iterate while J is out of place.
           while(j >= 0 && arr[j].value > tmp.value)
           {
               arr[j + 1] = arr[j];
               j--;
           }
           // Assign the correct location of i where j stops.
           arr[j + 1] = tmp;
       }
    return arr;
   }

   public selectionSortList(arr: ValueColumn[]):ValueColumn[]
   {
       for(let i = 0; i < arr.length - 1; i++)
       {
           let min = i;

           for(let j = i + 1; j < arr.length; j++)
           {
               if(arr[j].value < arr[min].value)
               {
                   // Choose the lesser of the two:
                   min = j;
               }
           }
           // In-place swap:
           const tmp = arr[min];
           arr[min] = arr[i];
           arr[i] = tmp;
       }
       return arr;
   }


   public shellSortList(arr: ValueColumn[]):ValueColumn[]
   {
       let gap = 0;
       while(gap < Math.floor(arr.length / 3))
       {
           gap = gap * 3 + 1;
       }

       while(gap > 0)
       {
           for(let i = gap; i < arr.length; i++)
           {
               let j = i;
               const tmp = arr[i];

               while(j >= gap && arr[j - gap].value > tmp.value)
               {
                   arr[j] = arr[j - gap];
                   j -= gap;
               }
               arr[j] = tmp;
           }
           gap = Math.floor((gap - 1) / 3);
       }
       return arr;
   }
}
