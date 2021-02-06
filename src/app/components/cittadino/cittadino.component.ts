import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CittadinoService } from 'src/app/services/cittadino.service';
import { ConteService } from 'src/app/services/conte.service';

@Component({
  selector: 'app-cittadino',
  templateUrl: './cittadino.component.html',
  styleUrls: ['./cittadino.component.scss'],
})
export class CittadinoComponent implements OnInit {
  zona: FormControl = new FormControl();
  mascherine: number;

  constructor(
    private conteService: ConteService,
    private cittadinoService: CittadinoService
  ) {}

  ngOnInit(): void {
    this.conteService
      .getZona()
      .subscribe((res) => this.zona.setValue(res.zona));
    this.zona.disable();

    this.cittadinoService.getMascherine().subscribe(
      (res: any) => this.mascherine = res.mascherine
    );
  }
}
