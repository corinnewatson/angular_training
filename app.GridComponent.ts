import{Component,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl: "./app.Grid.html"
})
export class GridComponent{

    gridColumns: Array<Object> = new Array<Object>;
    gridData: Array<Object> = new Array<Object>;

}