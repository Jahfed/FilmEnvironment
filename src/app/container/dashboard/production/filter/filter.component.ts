import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'production-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  released: number = 0;

  @Input()
  inProduction: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadio: string = "all";

  onSelectedFilterChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadio);
  }
}
