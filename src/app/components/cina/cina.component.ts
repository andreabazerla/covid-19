import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina.service';

@Component({
  selector: 'app-cina',
  templateUrl: './cina.component.html',
  styleUrls: ['./cina.component.scss'],
})
export class CinaComponent implements OnInit {
  pandemia: FormControl = new FormControl();

  constructor(private cinaService: CinaService) {}

  ngOnInit(): void {}

  updatePandemia(checkbox: any) {
    this.cinaService.updatePandemia(checkbox.checked)
      .subscribe(status => {
        this.pandemia.setValue(status);
      });
  }
}
