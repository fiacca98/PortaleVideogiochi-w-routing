import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game-list.service';
import { GameItem } from '../../GameItem';
import { PortaleRouterModule } from '../router/router.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  games: GameItem[];
  
  constructor(private gameListservice: GameListService, private router: Router) { 
    this.games = gameListservice.getGamesList(); 
  }

  ngOnInit() {
  }

  showDetail(item: GameItem){
    this.router.navigate(["/dettaglio/" + item.id]);
  }

}
