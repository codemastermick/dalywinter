export class Testimonial {
  Name: string;
  Position: string;
  Company: string;
  Content: string;

  constructor(name: string, position: string, company: string, content: string) {
    this.Name = name;
    this.Position = position;
    this.Company = company;
    this.Content = content;
  }
}
