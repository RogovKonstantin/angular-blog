import { HeaderComponent } from '../header/header.component';
import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { ArticleFormComponent } from '../form/form.component';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-box-with-form',
  templateUrl: './box-with-form.component.html',
  styleUrls: ['./box-with-form.component.scss'],
  imports: [ArticleFormComponent, HeaderComponent, BoxComponent],
  standalone: true
})
export class BoxWithFormComponent {
  @Output() newArticle = new EventEmitter<{author: string, title: string, category: string, content: string}>();

  @ViewChild(ArticleFormComponent) formComponent!: ArticleFormComponent;

  constructor() {
    this.formComponent = new ArticleFormComponent();
  }

  ngAfterViewInit() {
    this.formComponent.newArticle.subscribe(article => this.addArticle(article));
  }

  addArticle(article: {author: string, title: string, category: string, content: string}) {
    this.newArticle.emit(article);
  }
}