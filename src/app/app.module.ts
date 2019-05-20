import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './Components/search-user/search-user.component';
import { RepoListComponent } from './Components/repo-list/repo-list.component';
import { PickedRepoComponent } from './Components/picked-repo/picked-repo.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoListService } from './Services/repo-list.service';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    RepoListComponent,
    PickedRepoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RepoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
