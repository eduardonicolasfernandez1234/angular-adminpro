import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donuth',
  templateUrl: './donuth.component.html',
  styles: [
  ]
})
export class DonuthComponent implements OnInit {

  @Input('titulo') titulo: string = 'Sin titulo';
  @Input('labels') labels: string[] = ['label1', 'label2', 'label3'];
  @Input('data') dataset: number[] = [ 55, 100, 200];

  doughnutChartType: ChartType = 'doughnut';
  colorsChart: Color[] = [ '#6857E6', '#009FEE', '#F02059' ];
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      {
        data: this.dataset
      }
    ]
  };

  // {
  //   data: this.dataset,
  //   backgroundColor: this.colorsChart,
  //   hoverBackgroundColor: ['#6857E6', '#009FEE', '#F02059'],
  //   hoverBorderColor: ['#000000','#000000','#00000003']
  // },

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets = [
      {
        data: this.dataset,
        backgroundColor: this.colorsChart,
        hoverBackgroundColor: this.colorsChart,
        hoverBorderColor: ['#000', '#000', '#000']
      }
    ];
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
