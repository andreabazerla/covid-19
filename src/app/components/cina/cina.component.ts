import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-cina',
  templateUrl: './cina.component.html',
  styleUrls: ['./cina.component.scss'],
})
export class CinaComponent implements OnInit {
  pandemia: FormControl = new FormControl();
  @Output() update = new EventEmitter<boolean>();

  constructor(
    private cinaService: CinaService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.cinaService
      .getPandemia()
      .subscribe((res) => this.pandemia.setValue(res.pandemia));
  }

  updatePandemia(checkbox: boolean) {
    this.cinaService.updatePandemia(checkbox).subscribe((res: any) => {
      this.pandemia.setValue(res.pandemia);
      this.update.emit(checkbox);
      this.loggerService.addLog(`Cina: pandemia = ${res.pandemia}`);
    });
  }
}
