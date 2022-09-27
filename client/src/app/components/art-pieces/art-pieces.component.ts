import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ArtPiece } from 'src/app/models/ArtPiece';
import { ArtPiecesService } from 'src/app/services/artPieces.service';

@Component({
  selector: 'app-art-pieces',
  templateUrl: './art-pieces.component.html',
  styleUrls: ['./art-pieces.component.sass']
})
export class ArtPiecesComponent implements OnInit, OnDestroy {
  ART_PIECE_MODEL: string = '';
  artPieces: ArtPiece[] = [];
  routerEventsSubscription: Subscription;

  constructor(
    public artPiecesService: ArtPiecesService,
    public router: Router  
  ) {
    this.routerEventsSubscription = router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent): void => {
      switch (e.url) {
        case '/pinturas':
          this.ART_PIECE_MODEL = 'Painting';
          break;

        case '/lineas':
          this.ART_PIECE_MODEL = 'Linework';
          break;

        default:
          return;
      }
   });    
  }

  ngOnInit(): void {
    this.getArtPieces();
  }

  ngOnDestroy():void {
    this.routerEventsSubscription.unsubscribe();
  }

  getArtPieces() {
    this.artPiecesService.getArtPieces(this.ART_PIECE_MODEL).subscribe(
      res => this.artPieces = res.artPieces,
      err => console.error(err)
    );
  }
}
