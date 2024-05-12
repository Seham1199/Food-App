import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimDate'
})
export class TrimDatePipe implements PipeTransform {

  transform(creationDate: any, maxLength: number = 8): string {
    // Check if creationDate is null or undefined
    if (!creationDate) {
      return '';
    }

    // Trim the creationDate and add ellipsis (...) if it exceeds maxLength
    return creationDate.length > maxLength ? `${creationDate.slice(0, maxLength)}...` : creationDate;
  }

}
