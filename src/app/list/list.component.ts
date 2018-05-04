import { Post } from './../model/post.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
	@Input() post: Post;

	constructor() {}

	ngOnInit() {}
}
