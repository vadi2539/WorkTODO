import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './Common/Components/layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './Common/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorPopupComponent } from './Common/Notifications/error-popup/error-popup.component';
//import { HomeComponent } from './Common/Components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
//import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatNativeDateModule } from '@angular/material';
import { LoginComponent } from './Common/Components/login/login.component';
import { WorkComponent } from './Common/Components/work/work.component';
import { DataComponent } from './Common/Components/data/data.component';










@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorPopupComponent,
    LoginComponent,
    WorkComponent,
    DataComponent,
   
    
   
  
   
    

  ],
  entryComponents: [
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ChartsModule,
    HttpClientModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // MatPasswordStrengthModule.forRoot(),
    // MatPasswordStrengthModule

    ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
