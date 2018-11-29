import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'fWNaR-rxAic', song: 'Carly Rae Jepsen - Call Me Maybe'},
    {id: 'GXoZLPSw8U8', song: 'Colbie Caillat - Try'},
    {id: 'qMxX-QOV9tI', song: 'Jessie J - Price Tag ft. B.o.B'},
    {id: 'cSnkWzZ7ZAA', song: 'Flo Rida - Whistle [Official Video]'},
    {id: 'nJ31sMmytHU', song: 'Davichi & T-ara(다비치&티아라) _ We were in love(우리 사랑했잖아) MV'}
  ];


  constructor() { }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
