import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-DetailGame',
  templateUrl: './DetailGame.component.html',
  styleUrls: ['./DetailGame.component.scss']
})
export class DetailGameComponent implements OnInit {
  gameId: number = 0;
  game: any;
  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.gameService.getGameById(id).subscribe(gameData => {
        this.game = gameData[0];
      });
    });
  }
  getBackgroundImageUrl(game: any): string {
    if (!game || !game.screenshots) {
      return ''; 
    }
    
    const screenshots = game.screenshots.split('|');
    const firstImageUrl = screenshots[0] || '';
  
    return `linear-gradient(to top, var(--color-primary), transparent), url('${firstImageUrl}')`;
  }
  
  
}
