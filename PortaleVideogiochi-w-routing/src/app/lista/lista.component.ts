import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';
import { GameItem } from '../../GameItem';
import { PortaleRouterModule } from '../router/router.module';
import { Router } from '@angular/router';
import { Genere } from '../Generi';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  generi: Genere[];
  games: GameItem[];
  currentGames: GameItem[];
  filtro: string = "00";

  constructor(private gameListservice: GameListService, private router: Router) {
    this.games = gameListservice.getGamesList();
    this.generi = this.gameListservice.getGeneri();
    this.currentGames = this.games.filter(item => {
      return true;
    });
  }

  ngOnInit() {
  }

  showDetail(item: GameItem) {
    this.router.navigate(["/dettaglio/" + item.id]);
  }

  filtra() {
    console.log("filtra");
    this.currentGames = this.games.filter(game => {
      return game.genere == this.filtro || this.filtro == "00"
    });

  }

}
