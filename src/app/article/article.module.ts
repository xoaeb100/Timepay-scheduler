import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCompComponent } from './article-comp/article-comp.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [
    ArticleCompComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule
  ],
  exports: [ArticleCompComponent],

})
export class ArticleModule { }
