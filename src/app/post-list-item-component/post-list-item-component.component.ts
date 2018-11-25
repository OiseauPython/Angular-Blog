import {
	Component,
	Input,
	OnInit
} from '@angular/core';

@Component({
	selector: 'app-post-list-item-component',
	templateUrl: './post-list-item-component.component.html',
	styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() post; //

	//Functions for +1 -1 buttons but which return nothing (I don't know why)
	/*
	onVoteGood() {
		this.post.loveIt = this.post.loveIt + 1;
		console.log(this.post.title);
	}

	onVoteBad() {
		this.post.loveIt = this.post.loveIt - 1;
		console.log("-1");
	}
	*/
	constructor() {}

	ngOnInit() {}

}
