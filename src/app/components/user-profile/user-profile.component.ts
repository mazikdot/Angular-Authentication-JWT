import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  currentUser: Object = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
   // console.log("id  = "+id);
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
      //console.log(res.msg);
    })
  }

  ngOnInit() { }
}
