import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(panoramas: any, args?: any): any {
    if(args === undefined) return panoramas;
    return panoramas.filter(function(pano){
      return pano.name.includes(args);
    })
  }

}
