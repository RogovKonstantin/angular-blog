import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [HeaderComponent, ArticleComponent, NgFor],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})

export class BoxComponent {

  @Input() articles: Array<{ author: string, title: string, category: string, content: string }> = [];

  @Output() archiveArticle = new EventEmitter<number>();

  onDeleteArticle(index: number) {
    this.articles.splice(index, 1);
  }
  
  onArchive(index: number) {
      this.archiveArticle.emit(index);
  }

}
