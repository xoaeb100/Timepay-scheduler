import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCompComponent } from './article/article-comp/article-comp.component';

const routes: Routes = [
  { path: 'app-article-comp',  component: ArticleCompComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
