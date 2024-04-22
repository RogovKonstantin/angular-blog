import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class ArticleFormComponent {
  @Output() newArticle = new EventEmitter<{author: string, title: string, category: string, content: string}>();

  article = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    category: new FormControl(''),
    content: new FormControl('')
  });

  onSubmit() {
    const { author, title, category, content } = this.article.value;
    const articleData = {
      author: author || '',
      title: title || '',
      category: category || '',
      content: content || ''
    };
    this.newArticle.emit(articleData);
  }
}