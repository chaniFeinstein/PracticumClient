import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import user from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit,OnDestroy {
userName=null
  constructor(public userser:UserService) { }
  ngOnDestroy(): void {
   
  }
 

  ngOnInit(): void {
  }
 
}
