import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() post; //Recept of the array from the root component

  constructor() {}

  ngOnInit() {}
}
