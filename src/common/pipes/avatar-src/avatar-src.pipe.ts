import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/entities/user.entity';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'avatarSrc'
})
export class AvatarSrcPipe implements PipeTransform {

  transform(user: User | any): string {
    return user.avatar ? `${environment.HOST}${environment.PORT ? ':' + environment.PORT : ''}/${environment.STORAGE_ENDPOINT}/${user.avatar}` : 'assets/img/user-avatar.png';
  }

}
