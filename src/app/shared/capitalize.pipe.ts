import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args?: number): unknown {
    const limit = args || 1;
    return `${value.slice(0, limit).toUpperCase()}${value
      .slice(limit)
      .toLowerCase()}`;
  }
}
