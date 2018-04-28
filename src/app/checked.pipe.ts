import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checked'
})
export class CheckedPipe implements PipeTransform {

  transform(panoramas: any, check?: any): any {
    if(check === undefined) return panoramas;
    return panoramas.filter(function(pano){
      if(pano.manualRotation == check)
      return pano;
    })
  }

}
