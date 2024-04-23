import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() title: string = 'Default Title';
  @Input() category: string = 'Default Category';
  @Input() author: string = 'Default Author';
  @Input() content: string = 'Default Content';

  @Output() deleteArticle = new EventEmitter<void>();
}

