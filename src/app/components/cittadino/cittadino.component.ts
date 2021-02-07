import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { CinaService } from 'src/app/services/cina.service';
import { CittadinoService } from 'src/app/services/cittadino.service';
import { ConteService } from 'src/app/services/conte.service';
import { PfizerService } from 'src/app/services/pfizer.service';

@Component({
  selector: 'app-cittadino',
  templateUrl: './cittadino.component.html',
  styleUrls: ['./cittadino.component.scss'],
})
export class CittadinoComponent implements OnInit {
  zona: FormControl = new FormControl();

  outPLace = new FormGroup({
    universita: new FormControl(),
    farmacia: new FormControl(),
    cane: new FormControl(),
    ufficio: new FormControl(),
    bar: new FormControl(),
  });

  mascherine: number;

  constructor(
    private conteService: ConteService,
    private cittadinoService: CittadinoService,
    private cinaService: CinaService,
    private pfizerService: PfizerService
  ) {}

  ngOnInit(): void {
    this.conteService.getZona().subscribe((res) => {
      this.zona.setValue(res.zona);
      if (res.zona == 'arancione') {
        this.outPLace.controls['bar'].disable();
      } else if (res.zona == 'rossa') {
        this.outPLace.controls['bar'].disable();
        this.outPLace.controls['ufficio'].disable();
      }
    });
    this.zona.disable();

    this.cittadinoService
      .getMascherine()
      .subscribe((res: any) => (this.mascherine = res.mascherine));

    this.cinaService
      .getPandemia()
      .pipe(
        mergeMap((res: any) => {
          if (!res.pandemia) return [];
          return this.pfizerService.getVaccino();
        })
      )
      .subscribe((res: any) => {
        if (res !== undefined && !res.vaccino) {
          this.outPLace.controls['universita'].disable();
        }
      });
  }

  goOut(): void {
    this.cinaService
      .getPandemia()
      .pipe(
        mergeMap((res: any) => {
          if (!res.pandemia) return [];
          return this.pfizerService.getVaccino();
        })
      )
      .subscribe((res: any) => {
        if (res !== undefined && !res.vaccino) {
          this.consumeMascherine();
        }
      });
  }

  consumeMascherine() {
    this.cittadinoService
      .getMascherine()
      .pipe(
        mergeMap((res: any) => {
          let mascherine = this.useMascherine(res.mascherine);
          return this.cittadinoService.updateMascherine(mascherine);
        })
      )
      .subscribe((res: any) => {
        this.mascherine = res.mascherine;
      });
  }

  goUniversita(): void {
    this.cinaService
      .getPandemia()
      .pipe(
        mergeMap((res: any) => {
          if (!res.pandemia) return [];
          return this.pfizerService.getVaccino();
        })
      )
      .subscribe((res: any) => {
        if (res !== undefined && !res.vaccino) {
          this.cittadinoService
            .getMascherine()
            .pipe(
              mergeMap((res: any) => {
                let mascherine = this.useMascherine(res.mascherine);
                return this.cittadinoService.updateMascherine(mascherine);
              })
            )
            .subscribe((res: any) => {
              this.mascherine = res.mascherine;
            });
        }
      });
  }

  goFarmacia(): void {
    this.cinaService.getPandemia().subscribe((res: any) => {
      if (res.pandemia) {
        this.cittadinoService
          .getMascherine()
          .pipe(
            mergeMap((res: any) => {
              let mascherine = this.useMascherine(res.mascherine);
              return this.cittadinoService.updateMascherine(mascherine);
            })
          )
          .subscribe((res: any) => {
            this.mascherine = res.mascherine;
            this.cittadinoService
              .getMascherine()
              .pipe(
                mergeMap((res: any) => {
                  let mascherine = this.buyMascherine(res.mascherine);
                  return this.cittadinoService.updateMascherine(mascherine);
                })
              )
              .subscribe((res: any) => {
                this.mascherine = res.mascherine;
              });
          });
      }
    });
  }

  goCane() {
    this.goOut();
  }

  goBar() {
    this.goOut();
  }

  goUfficio() {
    this.goOut();
  }

  useMascherine(mascherine: number): number {
    return mascherine > 0 ? (mascherine = mascherine - 1) : 0;
  }

  buyMascherine(mascherine: number): number {
    return (mascherine = mascherine + 10);
  }
}
