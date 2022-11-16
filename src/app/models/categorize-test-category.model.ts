import {CategorizeTestItem} from "./categorize-test-item.model";

export class CategorizeTestCategory {
  constructor(
    public text: string | null,
    public code: string | null,
    public category: string,
    public items: CategorizeTestItem[]
  ) {}
}
