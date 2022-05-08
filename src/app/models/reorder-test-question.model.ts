import {ReorderTestItem} from "./reorder-test-item.model";

export class ReorderTestQuestion {
  constructor(
    public text: string,
    public items: ReorderTestItem[],
    public correctOrder: string
  ) {}
}
