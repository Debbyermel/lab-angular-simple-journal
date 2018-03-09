import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//services
import {JournalService} from './services/journal.service';

//components
import { EntryListComponent} from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';

// Route importation
import { Routes, RouterModule } from '@angular/router';


// Routes view
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'list', component: EntryListComponent },
  { path: ':id', component: SingleEntryComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
