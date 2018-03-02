import { Injectable } from '@angular/core';
import { GameItem } from '../GameItem';
import { Genere } from './Generi';

@Injectable()
export class GameListService {

  generi: Genere;
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
    for(let game of this.games)
    {
      if(game.id == item.id)
      {
        game.nome = item.nome;
        game.annoUscita = item.annoUscita;
        game.prezzo = item.prezzo; 
        game.consoleType = item.consoleType;
        game.descrizione = item.descrizione;
        game.genere = item.genere;
        game.rating = game.rating;
        alert("modificato");
      }
    }
  }

  clone(item: GameItem){
    return new GameItem(item.id, item.nome, item.descrizione, item.genere, item.rating, item.prezzo, item.annoUscita, item.consoleType);
  }

}
