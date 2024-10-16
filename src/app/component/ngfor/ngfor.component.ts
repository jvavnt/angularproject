import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  isDiv2:boolean = true
isDiv:boolean = true

isActive = false

divText = "Div4"


colors = ["blue" , "red" , "yellow"]
  setcolor: string = "bg-danger"; // Default background color

  setdivcolor(event: Event) {
    const selectedColor = (event.target as HTMLSelectElement).value;  // Type casting
    if (selectedColor === 'blue') {
      this.setcolor = 'bg-primary';
    } else if (selectedColor === 'red') {
      this.setcolor = 'bg-danger';
    } else if (selectedColor === 'yellow') {
      this.setcolor = 'bg-warning';
    }
  }

myobject = [
  {id:1 , name:"Jayant" , contect: " 123345" ,state:"Haryana" ,  status:true },
  {id:12 , name:"anish" , contect: " 827356" ,state:"Punjab" ,status:false},
  {id:24 , name:"vishal" , contect: " 934571" ,state:"delhi", status:true}
]
// functions

 showdisDiv(){
  this.isDiv = true
 }
 hideisDiv(){
  this.isDiv = false
 }
//  updateisdiv(){
//   this.isDiv2 = !this.isDiv2
//  }





}
