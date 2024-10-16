import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  dataname: string = "delhi"
  callfunction(msg:string){
      alert(msg)
      console.log("call function alert")
  }
 changeCourseName(name: string){
  this.dataname = name
 }

}
