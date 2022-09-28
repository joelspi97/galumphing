import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ArtPiecesService } from 'src/app/services/art-pieces/art-pieces.service';

@Component({
  selector: 'app-art-pieces',
  templateUrl: './art-pieces.component.html',
  styleUrls: ['./art-pieces.component.sass']
})
export class ArtPiecesComponent implements OnInit, OnDestroy {
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
          this.artPiecesService.artPieceModel = 'Painting';
          break;

        case '/lineas':
          this.artPiecesService.artPieceModel = 'Linework';
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

  getArtPieces():void {
    this.artPiecesService.getArtPieces().subscribe({
      next: res => this.artPiecesService.artPieces = res.artPieces,
      error: err => console.error(err)
    });
  }
}
