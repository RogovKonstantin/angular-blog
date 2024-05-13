import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class ArticleFormComponent {
  @Output() newArticle = new EventEmitter<{author: string, title: string, category: string, content: string}>();

  article = new FormGroup({
    author: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]*$/)]),
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
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
    this.article.reset();
  }
}