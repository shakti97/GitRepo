import { Component } from '@angular/core';
import { RepoListService } from './Services/repo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName : string='';
  repoList : any[];
  myRepoList : any[]=[];
  homeScreen : boolean=true;

  constructor(private reposervice : RepoListService) { }
  
  onUserNameChanged(username : string):void{
    this.userName=username;
    console.log('AppComponent ',this.userName);
    this.getRepoList(this.userName);
  }
  onAddToMyRepo(repoId:string):void{
    this.myRepoList.push(...this.repoList.filter(repo=>repo.id==repoId));
    console.log(this.myRepoList);
  }
  getRepoList(userName:string){
    this.reposervice.getRepos(userName).subscribe((data: any[])=> this.repoList=data)
  }
  toggleScreen(){
    console.log('toggleScreen');
    this.homeScreen=!this.homeScreen;
  }
}

