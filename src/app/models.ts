export interface APIResponse {
  data: Surah;
}

export interface Ayah {
  numberInSurah: number;
  text: string;
  textEn: string;
  audio: string;
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
  ayahsEn: Ayah[];
}
