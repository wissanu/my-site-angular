import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from './menu-item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: IPost[], find: string): IPost[] {
    if(!posts) return [];
    if(!find) return posts;
    return posts.filter((o:IPost) => {
      return o.title.toLowerCase().indexOf(find.toLowerCase()) > -1 ||
             o.tag.toLowerCase().indexOf(find.toLowerCase()) > -1
    });
   }
}
