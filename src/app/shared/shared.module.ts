import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material';
import { ExampleMaterialModule } from './material-module';
import { ExternalReference } from '@angular/compiler';

@NgModule({
    imports:[
        CommonModule,
        ExampleMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        FlexLayoutModule
    ],
    exports:[
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        ExampleMaterialModule
    ]
})
export class SharedModule{}