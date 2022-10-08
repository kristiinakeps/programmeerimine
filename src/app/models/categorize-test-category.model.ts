import {CategorizeTestItem} from "./categorize-test-item.model";

export class CategorizeTestCategory {
  constructor(
    public text: string,
    public category: string,
    public items: CategorizeTestItem[]
  ) {}
}
