import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuranService } from './quran.service';
import { ClockComponent } from './components/clock/clock.component';
import { SurahComponent } from './components/surah/surah.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, SurahComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [QuranService],
  bootstrap: [AppComponent],
})
export class AppModule {}
