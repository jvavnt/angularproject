import { Routes } from '@angular/router';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { TemplateComponent } from './component/forms/template/template.component';
import { GetapiComponent } from './component/apiintigration/getapi/getapi.component';


export const routes: Routes = [
{
    path:'databinding',
    component: DatabindingComponent
   
},
{
    path:'',
    component: NgforComponent
},
{
    path:'emp-list',
    component: EmployeelistComponent
},
{
    path:'userlist',
    component:UserlistComponent
},
{
   path: 'template',
  loadComponent: () => 
  import('./component/forms/template/template.component')
    .then((c) => c.TemplateComponent)
},
{
    path:'getapi',
    component:GetapiComponent },

   {
    path:"postapi", 
    loadComponent:()=>
    import('./component/apiintigration/postapi/postapi.component').then((c)=> c.PostapiComponent)
   } ,
{ path: '**', redirectTo: '', pathMatch: 'full' }
];
