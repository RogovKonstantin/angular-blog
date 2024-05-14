import { HeaderComponent } from '../header/header.component';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ArticleFormComponent } from '../form/form.component';
import { BoxComponent } from '../box/box.component';
import { Article } from '../types/article.type';

@Component({
  selector: 'app-box-with-form',
  templateUrl: './box-with-form.component.html',
  styleUrls: ['./box-with-form.component.scss'],
  imports: [ArticleFormComponent, HeaderComponent, BoxComponent],
  standalone: true,
})
export class BoxWithFormComponent {
  @Output() newArticle = new EventEmitter<Article>();

  @ViewChild(ArticleFormComponent) formComponent!: ArticleFormComponent;

  ngAfterViewInit() {
    this.formComponent.newArticle.subscribe((article) =>
      this.newArticle.emit(article)
    );
  }
}
