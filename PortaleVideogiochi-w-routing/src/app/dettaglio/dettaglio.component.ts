import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from '../game-list.service';
import { GameItem } from '../../GameItem';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  selectedGame: GameItem;

  constructor(private route: ActivatedRoute, private gameListService: GameListService) { 
    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null)
        this.selectedGame = this.gameListService.getGameById(params["id"]);
    });
  }

  ngOnInit() {
  }

}
