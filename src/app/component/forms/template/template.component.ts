import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule , JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  subjectobj: any = {
    firstname:"",
    lastname:"",
    username:"",
    city:"",
    state: "",
    zipcode: "",
    check:""
  }
  
  updatedsubject: any;

  onsubmit(){
    this.updatedsubject = this.subjectobj
  }

  resetform(){
    this.subjectobj =  {
    firstname:"",
    lastname:"",
    username:"",
    city:"",
    state: "",
    zipcode: "",
    check:""
  }
  }
  
}
