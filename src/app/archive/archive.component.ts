import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor } from '@angular/common';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [HeaderComponent,NgFor,ArticleComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})

export class ArchiveComponent {

}

