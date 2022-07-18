import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: []
})
export class DonaHttpComponent implements OnInit {

  public labels: string[] = [];
  public data: number[] = [];
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
          {
              data: [350, 450, 100],
              backgroundColor: ['#F79365', '#72D68B', '#05A0F0', '#E06DED', '#72D68B', '#05A0F0']
          }
      ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit (): void {
      this.graficasService.getUsuariosRedesSociales()
        .subscribe(data =>{
          this.doughnutChartLabels = Object.keys(data); 

          console.log(this.labels);
        })
  }

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
  }

}
