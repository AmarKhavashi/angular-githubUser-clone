import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
   private userName = 'AmarKhavashi';
   private clientId = '3279408a4074a92a470f';
   private clientSecret = 'c0081e183c0b20142a43151e6122999524d04e22';

   constructor(private _http: Http) {
   }
   getUser() {
      return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
         .map(res => res.json());
   }

   getRepos() {
      return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
         .map(res => res.json());
   }
   updateUser(userName: string) {
      this.userName = userName;

   }
   getAllGitHubUsers() {
      return this._http.get('https://api.github.com/users')
         .map(res => res.json());
   }

}
