import {NONE} from "../constants";

export class FillBlankDropdownItem {
  constructor(
    public textBeforeBlank: string,
    public textAfterBlank: string,
    public correctAnswer: string,
    public options: string[],
    public selectedOption: string,
    public color = NONE
  ) {}
}
