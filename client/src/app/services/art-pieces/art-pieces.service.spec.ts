import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtPiecesService } from './art-pieces.service';

describe('ArtPiecesService', () => {
  let service: ArtPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ArtPiecesService]
    });
    service = TestBed.inject(ArtPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
