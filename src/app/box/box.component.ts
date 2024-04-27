import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  onDeleteArticle(index: number) {
    this.articles.splice(index, 1);
  }
  @Output() archiveArticle = new EventEmitter<number>();

onArchive(index: number) {
    this.archiveArticle.emit(index);
}
}
