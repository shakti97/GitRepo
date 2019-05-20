import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userName : string;
  constructor(){
    this.userName='';
  }
  @Output()
  userNameChanged : EventEmitter<string> = new EventEmitter<string>();

  onUserNameSearch(){
    this.userNameChanged.emit(this.userName);
    console.log('usernamechange',this.userName); 
  }
  ngOnInit() {

  }

}
