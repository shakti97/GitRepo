import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picked-repo',
  templateUrl: './picked-repo.component.html',
  styleUrls: ['./picked-repo.component.css']
})
export class PickedRepoComponent implements OnInit {
  @Input()
  myRepoList: any[];

  constructor() { }

  ngOnInit() {
  }

}
