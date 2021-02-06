import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConteService } from 'src/app/services/conte.service';

@Component({
  selector: 'app-conte',
  templateUrl: './conte.component.html',
  styleUrls: ['./conte.component.scss'],
})
export class ConteComponent implements OnInit {
  zona: FormControl = new FormControl();

  constructor(private conteService: ConteService) {}

  ngOnInit(): void {
    this.conteService
      .getZona()
      .subscribe((res) => this.zona.setValue(res.zona));
  }

  updateZona(zona: string) {
    this.conteService.updateZona(zona).subscribe((res: any) => {
      this.zona.setValue(res.zona);
      console.log(zona);
    });
  }
}
