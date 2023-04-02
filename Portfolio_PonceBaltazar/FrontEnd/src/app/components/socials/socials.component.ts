import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
