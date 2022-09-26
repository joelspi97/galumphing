import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtPiece } from '../models/ArtPiece';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {
  PAINTING_MODEL = 'Painting';
  LINEWORK_MODEL = 'Linework';

  constructor(private http: HttpClient) { }

  getArtPieces(artPieceModel: string): void {
    this.http.get<ArtPiece[]>(environment.apiUrl, { 
      params: { "model": artPieceModel } 
    });
  }

  postArtPiece(artPieceModel: string, artPiece: ArtPiece): void {
    this.http.post<ArtPiece[]>(environment.apiUrl, { 
      ...artPiece, 
      "model": artPieceModel 
    });
  }

  deleteArtPiece(artPieceModel: string, id: string): void {
    this.http.delete<ArtPiece[]>(`${environment.apiUrl}/${id}`, { 
      params: { "model": artPieceModel } 
    });
  }

  getArtPieceDetails(artPieceModel: string, id: string): void {
    this.http.get<ArtPiece[]>(`${environment.apiUrl}/${id}`, { 
      params: { "model": artPieceModel } 
    });
  }

  updateArtPieceDetails(artPieceModel: string, id: string, artPiece: ArtPiece): void {
    this.http.put<ArtPiece[]>(`${environment.apiUrl}/${id}`, { 
      ...artPiece, 
      "model": artPieceModel 
    });
  }
}
