import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArtPiecesComponent } from './art-pieces.component';

describe('ArtPiecesComponent', () => {
  let component: ArtPiecesComponent;
  let fixture: ComponentFixture<ArtPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ArtPiecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
