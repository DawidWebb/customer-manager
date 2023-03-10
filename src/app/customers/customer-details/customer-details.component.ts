import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Customer, CustomerType } from "../model";
import { MessageService } from "src/app/core/message.service";

@Component({
  selector: "cus-customer-details",
  templateUrl: "./customer-details.component.html",
  styles: [],
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() customer: Customer | undefined;
  @Output() shift = new EventEmitter<string>();

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number | undefined;

  CustomerType = CustomerType;

  constructor(private messageService: MessageService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change");
  }

  ngOnInit(): void {
    console.log("init");

    // this.counterHandle = window.setInterval(() => {
    //   this.counter++;
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log("destroy");
    // clearInterval(this.counterHandle);
  }
  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.success("udało się zmienić kolor");
  }

  left() {
    this.shift.emit("left");
  }

  right() {
    this.shift.emit("right");
  }
}
