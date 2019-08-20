export class Employee {
  ID: string;
  Name: string;
  Location: string;
  Position: string;
  Department: string;
  Bio: string;

  constructor(id: string, name: string, location: string, position: string, department: string, bio: string) {
    this.ID = id;
    this.Name = name;
    this.Location = location;
    this.Position = position;
    this.Department = department;
    this.Bio = bio;
  }
}
