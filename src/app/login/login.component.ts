import { Component, OnInit,ViewChild } from '@angular/core';
import user from '../user';
import { UserService } from '../user.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { stringify } from 'querystring';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
user:user=new user(0,"","",""," ",null," ",null," ","")
arrDown:user[];
 PasswordManager="1234"
 inputPass:string;
 manager:boolean=false;
 wanted:boolean=false;
empty:user=new user(0,"","",""," ",""," ",0," ","")
state:boolean=false;
familyId=0;
personalState=false
  constructor(public userSer:UserService) { }
  ngOnInit(): void {
    // this.userSer.getUsers().subscribe((succ) => {
    //   this.arrDown = succ;
    // },
    //   (err) => {
    //     alert("התרחשה שגיאה בקבלת הנתונים");
    //     console.log(err)
    //   })

  }
  save(form){
 if(  this.userSer.curentUserSer.Gender=="male"&&this.personalState==true)
 this.userSer.curentUserSer.Status="father";
 else if(this.userSer.curentUserSer.Gender=="fmale"&&this.personalState==true)
 this.userSer.curentUserSer.Status="mother"
 else
 this.userSer.curentUserSer.Status="single";
 this.userSer.addUser(this.userSer.curentUserSer).subscribe((succ) => {
        console.log("הגיע");
        console.log(succ);
    
        if(succ==null)
        alert("קיים כבר משתמש עם מספר זהות זה")
       else {alert("נוסף בהצלחה!!");
       form.reset();}
        ;
      },
        (err) => {
          alert(" שגיאה בקבלת הנתונים");
          console.log(err)
        });
        
}
stepChanged(event, stepper){
  stepper.selected.interacted = false;
}
addChild(){ 
this.state=true;
}
sendChild(){
  this.empty.GetTz=this.userSer.curentUserSer.GetTz
  this.empty.Status = "child";
  this.empty.HMO=this.userSer.curentUserSer.HMO
  // this.arrDown.push(this.empty);
  this.userSer.addUser(this.empty).subscribe((succ) => {
    console.log("הגיע");
    if(succ==null)
        alert("קיים כבר משתמש עם מספר זהות זה")
       else alert("נוסף בהצלחה!!");
      
    ;
  },
    (err) => {
      alert(" שגיאה בקבלת הנתונים");
      console.log(err)
    })
this.empty=new user(0,"","",""," ",""," ",0," "," ")
  this.state=false;
}
download(){
  if(this.inputPass!=this.PasswordManager)
  alert("הסיסמא שהקשת שגויה")
 else {
  this.manager=true;
  this.userSer.getUsers().subscribe((succ) => {
    this.arrDown = succ;
  },
    (err) => {
      alert("התרחשה שגיאה בקבלת הנתונים");
      console.log(err)
    })
    var CsvString = "";
     this.arrDown.map(item => {
      CsvString+=JSON.stringify(item)+",";
      CsvString += "\n";
  });
  CsvString = "data:application/csv," + encodeURIComponent(CsvString);
  var anchor = document.createElement("A");
  anchor.setAttribute("href", CsvString);
  anchor.setAttribute("download", "somedata.csv");
  document.body.append(anchor);
  anchor.click();}
}
IsManage(){
  this.wanted=true;
}}
