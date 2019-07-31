

export class ListItem {
    public id: number = Math.floor(Math.random()*1000);
    public title: string;
    public done: boolean = false;

    constructor(title:string){
        this.title = title;
    }
}