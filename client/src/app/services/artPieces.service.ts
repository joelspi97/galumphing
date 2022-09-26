import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtPiece } from '../models/ArtPiece';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtPiecesService {
  constructor(private http: HttpClient) { }

  getArtPieces(artPieceModel: string) {
    return this.http.get<{ message: string, artPieces: ArtPiece[] }>(`${environment.apiUrl}/${artPieceModel}`);
  }

  postArtPiece(artPieceModel: string, artPiece: ArtPiece) {
    return this.http.post<{ message: string, newArtPiece: ArtPiece }>(`${environment.apiUrl}/${artPieceModel}`, artPiece);
  }

  deleteArtPiece(artPieceModel: string, id: string) {
    return this.http.delete<{ message: string, deletedArtPiece: ArtPiece }>(`${environment.apiUrl}/${artPieceModel}/${id}`);
  }

  getArtPieceDetails(artPieceModel: string, id: string) {
    return this.http.get<{ message: string, artPieceDetails: ArtPiece }>(`${environment.apiUrl}/${artPieceModel}/${id}`);
  }

  updateArtPieceDetails(artPieceModel: string, id: string, artPiece: ArtPiece) {
    return this.http.put<{ message: string, updatedArtPiece: ArtPiece }>(`${environment.apiUrl}/${artPieceModel}/${id}`, artPiece);
  }
}
