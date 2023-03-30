import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 
        // 350, 450, 100, 150 
      ],
        backgroundColor: ['#72E87A','#F56143', '#70BDFF', '#E0A555'],
        hoverBackgroundColor: ['#72E87A','#F56143', '#70BDFF', '#E0A555'],
        hoverBorderColor: ['#72E87A','#F56143', '#70BDFF', '#E0A555']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData = { 
    //       labels: this.doughnutChartLabels,
    //       datasets: [
    //         {
    //           data: values
    //         }
    //       ]
    //     }
    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
        .subscribe( ({ labels, values }) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData = { 
             labels: this.doughnutChartLabels,
             datasets: [
               {
                 data: values
               }
             ]
           }
        });
  }

}
