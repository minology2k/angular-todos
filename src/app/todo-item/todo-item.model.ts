export class TodoItem {
  public id: number;
  public name: string;
  public isDone: boolean;

  constructor(id: number, name: string, isDone: boolean) {
    this.id = id;
    this.name = name;
    this.isDone = isDone;
  }
}
