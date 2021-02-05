import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PfizerService } from 'src/app/services/pfizer.service';

@Component({
  selector: 'app-pfizer',
  templateUrl: './pfizer.component.html',
  styleUrls: ['./pfizer.component.scss'],
})
export class PfizerComponent implements OnInit {
  vaccino: FormControl = new FormControl();
  @Output() update = new EventEmitter<boolean>();

  constructor(private pfizerService: PfizerService) {}

  ngOnInit(): void {
    this.pfizerService
      .getVaccino()
      .subscribe((res) => this.vaccino.setValue(res.vaccino));
  }

  updateVaccino(checkbox: boolean) {
    this.pfizerService.updateVaccino(checkbox).subscribe((res: any) => {
      this.vaccino.setValue(res.vaccino);
      this.update.emit(checkbox);
    });
  }
}
