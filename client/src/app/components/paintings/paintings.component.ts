import { Component, OnInit } from '@angular/core';
import { ArtPiece } from 'src/app/models/ArtPiece';
import { ArtPiecesService } from 'src/app/services/artPieces.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.sass']
})
export class PaintingsComponent implements OnInit {
  PAINTING_MODEL = 'Painting';
  paintings: ArtPiece[] = [];

  constructor(public artPiecesService: ArtPiecesService) { }

  ngOnInit(): void {
    this.getPaintings();
  }

  getPaintings() {
    this.artPiecesService.getArtPieces(this.PAINTING_MODEL).subscribe(
      res => this.paintings = res.artPieces,
      err => console.error(err)
    );
  }
}
