import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../GameItem';
import { GameListService } from '../game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  nomeGioco: string;
  currentGame: GameItem;

  constructor(private route: ActivatedRoute ,private gameListService: GameListService) { 
    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null)
        this.currentGame = this.gameListService.getGameById(params["id"]);
    });
  }

  searchGame(){
    
    if(this.gameListService.findGame(this.nomeGioco) == true){

      this.currentGame = this.gameListService.getGameByName(this.nomeGioco);
    }
    else{
      alert("Gioco non presente");
    }
    
}
  saveData(){
    this.gameListService.setGame(this.currentGame);
  }

  ngOnInit() {
  }

}
