import { Component, OnInit } from '@angular/core';
import { Ayah, Surah } from 'src/app/models';
import { QuranService } from 'src/app/quran.service';

@Component({
  selector: 'surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.scss'],
})
export class SurahComponent implements OnInit {
  surah: Surah;
  surahNumber: number = 2;
  isSurahLoaded: boolean = false;
  isFirstSurah: boolean = true;
  isLastSurah: boolean = false;
  ayah: Ayah;
  ayahEn: Ayah;
  ayahNumber: number = 1;
  isFirstAyah: boolean = true;
  isLastAyah: boolean = false;
  ayahAudio = new Audio();
  isAudioReady: boolean = false;
  isAudioPlaying: boolean = false;

  constructor(private service: QuranService) {}

  ngOnInit(): void {
    this.ayahAudio.onended = () => (this.isAudioPlaying = false);
    this.loadSurahAndAyahs(this.surahNumber);
  }

  loadSurahAndAyahs(surahNumber: number) {
    this.isSurahLoaded = false;
    this.ayahNumber = 1;

    this.service.getSurahByNumber(surahNumber).subscribe(data => {
      this.surah = data;
      this.ayah = this.surah.ayahs[this.ayahNumber - 1];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber - 1];
      this.isSurahLoaded = true;
      this.loadAyahAudio();
    });
  }

  loadAyahAudio() {
    this.ayahAudio.src = this.ayah.audio;
    this.isAudioPlaying = false;
    this.ayahAudio.load();
    this.ayahAudio.onloadedmetadata = () => (this.isAudioReady = true);
  }

  toggleAyahAudio() {
    this.isAudioPlaying ? this.ayahAudio.pause() : this.ayahAudio.play();
    this.isAudioPlaying = !this.isAudioPlaying;
  }

  nextAyah() {
    if (this.ayahNumber < this.surah.ayahs.length) {
      this.ayahNumber++;
      this.ayah = this.surah.ayahs[this.ayahNumber - 1];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber - 1];
      this.loadAyahAudio();

      if (this.ayahNumber == this.surah.ayahs.length) this.isLastAyah = true;
      else this.isFirstAyah = false;
    }
  }

  prevAyah() {
    if (this.ayahNumber > 1) {
      this.ayahNumber--;
      this.ayah = this.surah.ayahs[this.ayahNumber - 1];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber - 1];
      this.loadAyahAudio();

      if (this.ayahNumber == 1) this.isFirstAyah = true;
      else this.isLastAyah = false;
    }
  }

  nextSurah() {
    if (this.surahNumber < 114) {
      this.loadSurahAndAyahs(++this.surahNumber);

      if (this.surahNumber == 114) this.isLastSurah = true;
      else this.isFirstSurah = false;
    }
  }

  prevSurah() {
    if (this.surahNumber >= 1) {
      this.loadSurahAndAyahs(--this.surahNumber);

      console.log(this.surahNumber);

      if (this.surahNumber == 1) this.isFirstSurah = true;
      else this.isLastSurah = false;
    }
  }
}
