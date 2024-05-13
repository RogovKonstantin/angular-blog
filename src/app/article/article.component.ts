import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Output() deleteArticle = new EventEmitter<void>();

  @Output() archiveArticle = new EventEmitter<void>();

    @Input() article = {
      title: 'Default Title',
      category: 'Default Category',
      author: 'Default Author',
      content: 'Default Content',
    };
  
onArchive() {
    this.archiveArticle.emit();
}

onDelete() {
  this.deleteArticle.emit();
}

}

