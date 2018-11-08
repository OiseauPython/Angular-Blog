import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    pageTitle = 'My blog made with Angular !';
    
    post = [{title : 'First article', content : 'A very cool article', loveIt: 2, createAt:Date}, 
            {title : 'Second article', content : 'A seconde very cool article', loveIt: -2, createAt:Date },
            {title : 'Another one', content : 'Awesome article', loveIt: 1, createAt:Date}];

}
