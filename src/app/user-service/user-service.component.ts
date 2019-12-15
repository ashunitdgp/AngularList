import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {
  clientList=[];
  coustemerList=[];
  order: string = 'coustemerList';
  reverse: boolean = false;
  orderClient: string = 'clientList';
  clientReverse: boolean = false;
  constructor(private userService: UserService, public Dialog: MatDialog) { 
    
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  
  }
  setClientOrder(value: string) {
    if(this.orderClient == value) {
      this.clientReverse = !this.clientReverse;
    }

    this.orderClient = value;
  
  }

  ngOnInit() {
    this.userService.getUserDetail().subscribe((data: any) => {
     
      for(let i=0;i<data.length;i++){
        console.log(data[i].type)
        if(data[i].type==0){
           this.coustemerList.push(data[i].firstName)
        }else{
          this.clientList.push(data[i].firstName)
        }
      }
     
    });
  }
  
  openDialog() {
    let dialogRef=this.Dialog.open(DialogComponent)
    
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
      var data=result.filters;
       for(let i=0;i<data.length;i++){
        if(data[i].filterType=="Customer"){
           this.coustemerList.push(data[i].name)
        }else{
          this.clientList.push(data[i].name)
        }
      }
    }
    })
  }

}
