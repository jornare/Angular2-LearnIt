//Example orderBy pipe
import {Pipe, PipeTransform} from 'angular2/angular2';
@Pipe({
    name: 'orderBy'
})
class OrderByPipe implements PipeTransform {
    transform(value: Array<Object>, args: any[]) {
        var sortby = args[0];
        
        return value.sort((a,b) => {return a[sortby] - b[sortby];}) ;
    }
}