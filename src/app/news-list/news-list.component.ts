import { Component,Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleFormComponent } from '../form/form.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [HeaderComponent,ArticleComponent,NgFor,ArticleFormComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent {
  articles: Array<{author: string, title: string, category: string, content: string}> = [];

  addArticle(article: {author: string, title: string, category: string, content: string}) {
    this.articles.push(article);
  }
}

