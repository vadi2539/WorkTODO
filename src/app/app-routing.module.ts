
import { WorkComponent } from './Common/Components/work/work.component';
import { LoginComponent } from 'src/app/Common/Components/login/login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Common/Components/layout/layout.component';







const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component:LoginComponent},
    { path: 'work', component:WorkComponent},
    
    
    
    
    
    


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
