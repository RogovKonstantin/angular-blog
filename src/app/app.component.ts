import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NewsListComponent, ArticleComponent,ArticleFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';
  articles: Array<{author: string, title: string, category: string, content: string}> = [];

  addArticle(article: {author: string, title: string, category: string, content: string}) {
    this.articles.push(article);
  }
}

