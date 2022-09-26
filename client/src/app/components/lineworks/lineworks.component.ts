import { Component, OnInit } from '@angular/core';
import { ArtPiece } from 'src/app/models/ArtPiece';
import { ArtPiecesService } from 'src/app/services/artPieces.service';

@Component({
  selector: 'app-lineworks',
  templateUrl: './lineworks.component.html',
  styleUrls: ['./lineworks.component.sass']
})
export class LineworksComponent implements OnInit {
  LINEWORK_MODEL = 'Linework';
  lineworks: ArtPiece[] = [];

  constructor(public artPiecesService: ArtPiecesService) { }

  ngOnInit(): void {
    this.getPaintings();
  }

  getPaintings() {
    this.artPiecesService.getArtPieces(this.LINEWORK_MODEL).subscribe(
      res => this.lineworks = res.artPieces,
      err => console.error(err)
    );
  }
}
