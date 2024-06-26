import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './form/form.component';
import { BoxComponent } from './box/box.component';
import { BoxWithFormComponent } from './box-with-form/box-with-form.component';
import { ArchiveComponent } from './archive/archive.component';
import { Article } from './types/article.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ArticleComponent,
    ArticleFormComponent,
    BoxComponent,
    BoxWithFormComponent,
    ArchiveComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog';
  articles: Article[] = [];
  archivedArticles: Article[] = [];

  onNewArticle(article: {
    author: string;
    title: string;
    category: string;
    content: string;
  }) {
    this.articles.push(article);
  }
  onArchiveArticle(index: number) {
    this.archivedArticles.push(this.articles[index]);
    this.articles.splice(index, 1);
  }
}
