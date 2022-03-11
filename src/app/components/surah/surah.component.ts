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
  surahNumber: number = 3;
  ayah: Ayah;
  ayahEn: Ayah;
  ayahNumber: number = 0;
  ayahAudio = new Audio();
  isAudioReady: boolean = false;
  isAudioPlaying: boolean = false;
  currentSurah: Surah;

  constructor(private service: QuranService) {}

  ngOnInit(): void {
    this.ayahAudio.onended = () => (this.isAudioPlaying = false);
    this.loadSurahAndAyahs(this.surahNumber);
  }

  loadSurahAndAyahs(surahNumber: number) {
    this.service.getSurahByNumber(surahNumber).subscribe(data => {
      this.surah = data;
      this.ayah = this.surah.ayahs[this.ayahNumber];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber];
      this.loadAyahAudio();
    });
  }

  loadAyahAudio() {
    this.ayahAudio.src = this.ayah.audio;
    this.isAudioPlaying = false;
    this.ayahAudio.load();
    this.ayahAudio.onloadedmetadata = () => (this.isAudioReady = true);
  }

  toggleAudio() {
    this.isAudioPlaying ? this.ayahAudio.pause() : this.ayahAudio.play();
    this.isAudioPlaying = !this.isAudioPlaying;
  }

  nextAyah() {
    if (this.ayahNumber < this.surah.ayahs.length - 1) {
      this.ayahNumber++;
      this.ayah = this.surah.ayahs[this.ayahNumber];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber];
      this.loadAyahAudio();
    }
  }

  prevAyah() {
    if (this.ayahNumber >= 0) {
      this.ayahNumber--;
      this.ayah = this.surah.ayahs[this.ayahNumber];
      this.ayahEn = this.surah.ayahsEn[this.ayahNumber];
      this.loadAyahAudio();
    }
  }

  nextSurah() {
    if (this.surahNumber < 114) this.loadSurahAndAyahs(++this.surahNumber);
  }

  prevSurah() {
    if (this.surahNumber >= 0) this.loadSurahAndAyahs(--this.surahNumber);
  }
}
