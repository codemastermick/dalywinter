import * as functions from "firebase-functions";
import { Employee } from "./models/employee.model";
import { Testimonial } from "./models/testimonial.model";

export const handleCors = (req: functions.Request, res: functions.Response) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  }
};

export function mapEmployeeData(rows: any): Employee[][] {
  return rows.map((col: Employee[]) => {
    return {
      ID: col[0],
      Name: col[1],
      City: col[2],
      Location: col[3],
      Department: col[4],
      Bio: col[5]
    }
  });
}

export function mapServiceData(rows: any): any[][] {
  return rows.map((col: any[]) => {
    return {
      ID: col[0],
      Name: col[1],
      Description: col[2],
      Cost: col[3]
    }
  });
}

export function mapTestimonialData(rows: any): Testimonial[][] {
  return rows.map((col: Testimonial[]) => {
    return {
      Name: col[0],
      Position: col[1],
      Company: col[2],
      Content: col[3]
    }
  });
}
