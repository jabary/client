import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  email = "jabary980@ppu.edu";
  text = "Hello this is to test summary custome pipe that we need to create";
  onKeyUp(){
    console.log(this.email);
  }
  constructor() { }

  ngOnInit() {
  }

}
