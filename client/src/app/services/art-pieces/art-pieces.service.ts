import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtPiece } from '../../interfaces/ArtPiece';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtPiecesService {
  artPieceModel = '';
  artPieces: ArtPiece[] = [];

  constructor(private http: HttpClient) { }

  getArtPieces() {
    return this.http.get<{ message: string, artPieces: ArtPiece[] }>(`${environment.apiUrl}/${this.artPieceModel}`);
  }

  postArtPiece(artPiece: ArtPiece) {
    return this.http.post<{ message: string, newArtPiece: ArtPiece }>(`${environment.apiUrl}/${this.artPieceModel}`, artPiece);
  }

  deleteArtPiece(id: string) {
    return this.http.delete<{ message: string, deletedArtPiece: ArtPiece }>(`${environment.apiUrl}/${this.artPieceModel}/${id}`);
  }

  getArtPieceDetails(id: string) {
    return this.http.get<{ message: string, artPieceDetails: ArtPiece }>(`${environment.apiUrl}/${this.artPieceModel}/${id}`);
  }

  updateArtPieceDetails(id: string, artPiece: ArtPiece) {
    return this.http.put<{ message: string, updatedArtPiece: ArtPiece }>(`${environment.apiUrl}/${this.artPieceModel}/${id}`, artPiece);
  }
}
