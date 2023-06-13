import {NgModule} from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {Appservice} from './app.service';
@NgModule ({
  imports: [HttpClientModule],
  providers:[Appservice]
  
})
export class SharedModule { }
 