import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  @Input()
  repoList : any[] =[];

  @Output()
  addToMyRepo : EventEmitter<string> = new EventEmitter<string>();
  
  pickedRepo(repoId){
    this.addToMyRepo.emit(repoId);
    console.log("repoId:",repoId);
  }
  ngOnInit(){

  }

}
