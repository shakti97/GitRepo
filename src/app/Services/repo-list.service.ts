import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoListService {

  constructor(private http: HttpClient) { }

  getRepos(userName:string){
    var repoData=this.http.get("https://api.github.com/users/"+userName+"/repos");
    return repoData;
  }
}
