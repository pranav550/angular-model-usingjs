import { Component,OnInit  } from '@angular/core';
import * as jquery from "../assets/js/jquery.js";
import * as bootstrap from "../assets/js/bootstrap.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'modal1';
  jquery:any;
  bootstrap:any;
  ngOnInit(){
    this.jquery = jquery;
    this.bootstrap =  bootstrap;
  }
}
