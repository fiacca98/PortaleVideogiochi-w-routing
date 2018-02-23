import { Injectable } from '@angular/core';
import { GameItem } from '../GameItem';

@Injectable()
export class GameListService {

  games: GameItem[] = [new GameItem("01", "fifa 18", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2017, "PS4"), new GameItem("02", "pes 18", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2017, "PS4"), new GameItem("03", "FIFA 17", "Gioco Di Calcio", "Sportivo", 4.5, 49.90, 2016, "PS4")];

  getGamesList(): GameItem[]{
      return this.games;
  }
  getGameById(id: string): GameItem {
    for(let game of this.games)
    {
      if(game.id == id)
        return game;
    }
  }
  findGame(nome: string): boolean{
    let found: boolean = false;
    for(let game of this.games)
    {
      if(game.nome == nome)
      {
        found = true;
        
      }
    }
    return found;
  }

  getGameByName(nome: string): GameItem {
    for(let game of this.games)
    {
      if(game.nome == nome)
      {
        return game;
        
      }
    }
  }
  
  setGame(item: GameItem){
    let index: number = 0;
    for(let game of this.games)
    {
      if(game.id == item.id)
      {
        game = item; 
        alert("modificato");
      }
      index++;
    }
  }

}
