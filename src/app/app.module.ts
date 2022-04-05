import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuranService } from './quran.service';
import { ClockComponent } from './components/clock/clock.component';
import { SurahComponent } from './components/surah/surah.component';
import { SurahSelectComponent } from './components/surah-select/surah-select.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, SurahComponent, SurahSelectComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [QuranService],
  bootstrap: [AppComponent],
})
export class AppModule {}
