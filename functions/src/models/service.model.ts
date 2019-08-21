export class Service {
  ID: string;
  Name: string;
  Description: string;
  Cost: string;

  constructor(id: string, name: string, description: string, cost: string) {
    this.ID = id;
    this.Name = name;
    this.Description = description;
    this.Cost = cost;
  }
}
