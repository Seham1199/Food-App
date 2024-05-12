import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(description: string, maxLength: number = 30): string {
    // Check if description is null or undefined
    if (!description) {
      return '';
    }

    // Trim the description and add ellipsis (...) if it exceeds maxLength
    return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
  }



}
