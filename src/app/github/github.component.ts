import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';

@Component({
	selector: 'app-github',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.css'],
	providers: [GithubService]

})
export class GithubComponent implements OnInit {
	user: any[];
	allUsers: any[];
	repos: any[];
	userName: string;
	allUsersDiv: boolean = true
	userDiv: boolean = false

	constructor(private githubService: GithubService) {
		this.githubService.getUser().subscribe(user => {
			this.user = user;
		});
		this.githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});
	}

	findProfile() {
		this.githubService.updateUser(this.userName);
		this.githubService.getUser().subscribe(user => {
			this.user = user;
		});
		this.githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});
		this.allUsersDiv = false
		this.userDiv = true
	}

	hideAllUserDiv() {
		this.allUsersDiv = true
		this.userDiv = false
	}

	getAllGitHubUsers() {
		this.githubService.getAllGitHubUsers().subscribe(allUsers => {
			this.allUsers = allUsers;
		});
	}

	ngOnInit() {
		this.getAllGitHubUsers();
	}

}
