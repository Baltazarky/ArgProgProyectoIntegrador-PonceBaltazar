import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.router.navigate(['/login'])
  }
}
