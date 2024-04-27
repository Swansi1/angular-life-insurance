import {People} from "./people";

export interface Insurance {
  id: number;
  name: string;
  price: number;
  description: string;
  people: People;

}
