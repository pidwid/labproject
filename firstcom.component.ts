import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';


@Component ({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }
  third(){
    this.router.navigate(['/third']);
    console.log("this is third");
  }
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
}
