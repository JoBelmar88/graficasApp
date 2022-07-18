import { Component } from '@angular/core';


@Component({
    selector: 'app-barras',
    templateUrl: './barras.component.html',
    styles: []
})
export class BarrasComponent {
    datasets: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]

    anniosLabel: string[] = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];
}
