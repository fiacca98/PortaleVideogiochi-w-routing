import { Injectable } from '@angular/core';
import { GameItem } from '../GameItem';
import { Genere } from './Generi';

@Injectable()
export class GameListService {

  
  generi: Genere[] = [
    new Genere("00", "Tutti"),
    new Genere("01", "Simulazione"),
    new Genere("02", "Sparatutto"),
    new Genere("03", "Avventura"),
    new Genere("04", "Rompicapo"),
    new Genere("05", "Azione"),
    new Genere("06", "MOBA"),
    new Genere("07", "RPG"),
    new Genere("08", "Picchiaduro")
  ];
  games: GameItem[] = [
    new GameItem("01", "Fifa 18", "Gioco di calcio", this.generi[1].id, 4.5, 49.90, new Date("2017-2-3"), "PS4"), 
    new GameItem("02", "Battlefield One", "Gioco pum pum", this.generi[2].id, 4.5, 49.90, new Date("2017-2-3"), "PS4"), 
    new GameItem("03", "Uncharted 4", "Gioco cerca la ricchezza", this.generi[3].id, 4.5, 49.90, new Date("2017-2-3"), "PS4"), 
    new GameItem("04", "Tetris", "Gioco di incastri", this.generi[4].id, 4.5, 49.90, new Date("2-3-2017"), "PS4"), 
    new GameItem("05", "Bayonetta", "Gioco non so cosa si faccia, fatti i cazzi tuoi", this.generi[5].id, 4.5, 49.90, new Date(2017-2-3), "PS4"), 
    new GameItem("06", "DOTA 2", "Ah boh, tu sai che gioco è?", this.generi[6].id, 4.5, 49.90, new Date(2017-2-3), "PS4"), 
    new GameItem("07", "League of Legends", "Gioco per disadattati", this.generi[7].id, 4.5, 49.90, new Date(2017-2-3), "PS4"), 
    new GameItem("08", "Tekken 7", "Gioco di menare", this.generi[8].id, 4.5, 49.90, new Date(2017-2-3), "PS4")
  ];

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

  getGeneri(): Genere[] {
    return this.generi;
  }

}
