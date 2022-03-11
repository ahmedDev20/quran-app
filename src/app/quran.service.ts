import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, Surah } from './models';
import { map, Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuranService {
  private URL: string = 'http://api.alquran.cloud/v1/surah';

  constructor(private http: HttpClient) {}

  getSurahByNumber(id: number): Observable<Surah> {
    const surahAr = this.http.get<APIResponse>(`${this.URL}/${id}/ar.alafasy`).pipe(map(res => res.data));
    const ayahsEn = this.http.get<APIResponse>(`${this.URL}/${id}/en.asad`).pipe(map(res => res.data.ayahs));
    const surah = zip(surahAr, ayahsEn).pipe(
      map(res => ({
        ...res[0],
        ayahsEn: res[1],
      })),
    );
    return surah;
  }
}
