import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {

constructor(private http: HttpClient){

}
uservalue: any [] = []
getAllUsers(){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.uservalue = res;
  })
}

}
