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
  copyGame: GameItem;
  currentGame: GameItem;

  constructor(private route: ActivatedRoute ,private gameListService: GameListService) { 
    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null && params["id"] != "x"){
        this.copyGame = this.gameListService.getGameById(params["id"]);
        this.currentGame = gameListService.clone(this.copyGame);
      }
    });
  }

  searchGame(){
    
    if(this.gameListService.findGame(this.nomeGioco) == true){

      this.copyGame = this.gameListService.getGameByName(this.nomeGioco);
      this.currentGame = this.gameListService.clone(this.copyGame);
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

  ngFormReset(){
    this.currentGame = this.gameListService.clone(this.copyGame);
  }

}
