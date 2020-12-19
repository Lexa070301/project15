import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppComponent} from './app.component';
import {TableWorkersComponent} from './ui/table-workers/table-workers.component';
import {AddformWorkerComponent} from './ui/addform-worker/addform-worker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './ui/search/search.component';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, SearchComponent, MyfilterPipe,],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
