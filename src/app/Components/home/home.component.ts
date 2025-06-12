import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardModule } from 'primeng/card';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighchartsChartModule,CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

//  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngOnInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       // Import and initialize highcharts-more only in the browser
//       import('highcharts/highcharts-more').then(HC_more => {
//         HC_more.default(Highcharts);
//       });
//       const token = localStorage.getItem('token');
//       console.log('Token:', token);
//     }
//   }



  chartOptions: Highcharts.Options = {
    title: {
      text: 'U.S Solar Employment Growth',
      align: 'left'
    },

    subtitle: {
      text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      align: 'left'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2022'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: [{
      type: 'line',
      name: 'Installation & Developers',
      data: [
        43934, 48656, 65165, 81827, 112143, 142383,
        171533, 165174, 155157, 161454, 154610, 168960, 171558
      ]
    }, {
      type: 'line',
      name: 'Manufacturing',
      data: [
        24916, 37941, 29742, 29851, 32490, 30282,
        38121, 36885, 33726, 34243, 31050, 33099, 33473
      ]
    }, {
      type: 'line',
      name: 'Sales & Distribution',
      data: [
        11744, 30000, 16005, 19771, 20185, 24377,
        32147, 30912, 29243, 29213, 25663, 28978, 30618
      ]
    }, {
      type: 'line',
      name: 'Operations & Maintenance',
      data: [
        null, null, null, null, null, null, null,
        null, 11164, 11218, 10077, 12530, 16585
      ]
    }, {
      type: 'line',
      name: 'Other',
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274,
        17300, 13053, 11906, 10073, 11471, 11648
      ]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

 
  // Charts 2

 Highcharts: typeof Highcharts = Highcharts;

 
     chartOptions2: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Corn vs wheat estimated production for 2023'
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
      crosshair: true,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 metric tons (MT)'
      }
    },
    tooltip: {
      valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Corn',
        type: 'column',
        data: [387749, 280000, 129000, 64300, 54000, 34300]
      },
      {
        name: 'Wheat',
        type: 'column',
        data: [45321, 140000, 10000, 140500, 19500, 113500]
      }
    ]
  };

  // charts 3

  chartOptions3: Highcharts.Options = {
    chart: {
      type: 'pie',
      zooming: {
        type: 'xy'
      },
      panning: {
        enabled: true,
        type: 'xy'
      },
      panKey: 'shift'
    },
    title: {
      text: 'Egg Yolk Composition'
    },
    subtitle: {
      text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            distance: 20
          },
          {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10
            }
          }
        ] as any // Type workaround for array of label configs
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Percentage',
        data: [
          {
            name: 'Water',
            y: 55.02
          },
          {
            name: 'Fat',
            sliced: true,
            selected: true,
            y: 26.71
          },
          {
            name: 'Carbohydrates',
            y: 1.09
          },
          {
            name: 'Protein',
            y: 15.5
          },
          {
            name: 'Ash',
            y: 1.68
          }
        ]
      }
    ]
  };
}
