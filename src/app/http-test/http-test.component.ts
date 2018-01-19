import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'Moro';
    apitulos = 'Moro taas';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    autotulos = 'Jej';
    autoosoite = 'https://api.openchargemap.io/v2/poi/';
    tulokset : any;

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {
        this.http.get(this.apiosoite + '/media').subscribe(data => {
            console.log(data[0].filename);
            this.apitulos = this.kuvaosoite + data[0].filename;
        });
    };

    getFromAutoApi() {
        interface Autointerface {
            ID: number;
        }
        this.http.get(this.autoosoite).subscribe(data => {
            console.log(data[0].ID);
            this.autotulos = this.autoosoite + data[0].ID;
        });
    }

    ngOnInit() {
        //this.getJson();
        //this.getFromApi();
        this.getFromAutoApi();
    }

}
