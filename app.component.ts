import { Component } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newproject';

  constructor(private route: ActivatedRoute, private router: Router)
  {}
    first(){
      this.router.navigate(['/first']);
      console.log("this is first");
    }
    second(){
      this.router.navigate(['/second']);
      console.log("this is second");
    }
    third(){
      this.router.navigate(['/third']);
      console.log("this is second");
    }
  }

