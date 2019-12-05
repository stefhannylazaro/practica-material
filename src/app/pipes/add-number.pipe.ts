import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'addNumber'})

export class addNumberPipe implements PipeTransform {
    transform(value: number, num?: number): number {
        let n=isNaN(num) ? 1 : num;
        return value+n;
    }
}
