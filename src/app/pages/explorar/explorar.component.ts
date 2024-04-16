import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Router } from '@angular/router';

export interface Games {
  id: number;
  portada: string;
  titulo: string;
  publicacion: string,
  description?: string;
  precio: number;
  screenshots?: string[];
}

export interface publicacionInterface{
  year: number;
  month: number;
  day: number;
}


@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {

  games: Games[] = [];
  date: string = "";
  page: number = 1;
  pageSize: number = 20;

  constructor(
    private gameService: GamesService,
    private route: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getAllGamesByPage()

  }


GoSupplierPage(){
  this.route.navigate(['home/supplier']);
}

getAllGamesByPage() {
  console.log(`Fetching page ${this.page} with size ${this.pageSize}`);
  this.gameService.getAllGamesByPage(this.page, this.pageSize).subscribe({
    next: (data) => {
      this.games = data.map((game: { publicacion: { year: number; month: number; day: number; }; }) => ({
        ...game,
        formattedDate: this.formatDate(game.publicacion)
      }));
      console.log("Games: ", this.games);
    },
    error: (err) => {
      console.error('Error fetching games:', err);
    }
  });
}

onPageChange(newPage: any) {
  const pageAsNumber = Number(newPage);
  if (!isNaN(pageAsNumber) && pageAsNumber >= 1) {
    this.page = pageAsNumber;
    this.getAllGamesByPage();
  } else {
    console.error('Invalid page number:', newPage);
  }
}

nextPage() {
  this.page = 2;
  this.getAllGamesByPage()
}

previousPage() {
  if (this.page > 1) {
    this.page--;
    this.getAllGamesByPage()
  }
}
formatDate(publicacion: { year: number; month: number; day: number }): string {
  const year = publicacion.year;
  const month = publicacion.month.toString().padStart(2, '0');
  const day = publicacion.day.toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}

}
