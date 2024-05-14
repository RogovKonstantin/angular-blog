import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Article } from '../types/article.type';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class ArticleFormComponent {
  @Output() newArticle = new EventEmitter<Article>();

  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      author: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]*$/)],
      ],
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.newArticle.emit(this.articleForm.value);
      this.articleForm.reset();
    }
  }
}
