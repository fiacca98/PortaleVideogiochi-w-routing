import { Component, OnInit } from '@angular/core';
import { GameItem } from '../../GameItem';
import { GameListService } from '../game-list.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  nomeGioco: string;
  copyGame: GameItem;
  currentGame: GameItem;

  gameForm: FormGroup;

  constructor(private route: ActivatedRoute ,private gameListService: GameListService, private formBuilder: FormBuilder) { 
    
    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null && params["id"] != "x"){
        this.copyGame = this.gameListService.getGameById(params["id"]);
        this.currentGame = gameListService.clone(this.copyGame);
        this.createForm();
      }
    });
    
  }

  createForm() {
    this.gameForm = this.formBuilder.group({
      nome: [this.currentGame.nome,Validators.required],
      descrizione: [this.currentGame.descrizione,Validators.required],
      genere: [this.currentGame.genere,Validators.required],
      rating: [this.currentGame.rating,Validators.required],
      prezzo: [this.currentGame.prezzo,Validators.required],
      annoUscita: [this.currentGame.annoUscita,Validators.required],
      consoleType: [this.currentGame.consoleType,Validators.required],      
    });
  }

  searchGame(){
    
    if(this.gameListService.findGame(this.nomeGioco) == true){

      this.copyGame = this.gameListService.getGameByName(this.nomeGioco);
      this.currentGame = this.gameListService.clone(this.copyGame);
      this.createForm();
    }
    else{
      alert("Gioco non presente");
    }
    
}
  saveData(){
    this.currentGame.nome = this.gameForm.get("nome").value;
    this.currentGame.descrizione = this.gameForm.get("descrizione").value;
    this.currentGame.genere = this.gameForm.get("genere").value;
    this.currentGame.rating = this.gameForm.get("rating").value;
    this.currentGame.prezzo = this.gameForm.get("prezzo").value;
    this.currentGame.annoUscita = this.gameForm.get("annoUscita").value;
    this.currentGame.consoleType = this.gameForm.get("consoleType").value;
    this.gameListService.setGame(this.currentGame);
  }

  ngOnInit() {
  }

  ngFormReset(){
    this.gameForm.setValue({
      nome: this.currentGame.nome,
      descrizione: this.currentGame.descrizione,
      genere: this.currentGame.genere,
      rating: this.currentGame.rating,
      prezzo: this.currentGame.prezzo,
      annoUscita: this.currentGame.annoUscita,
      consoleType: this.currentGame.consoleType    
    });
    this.currentGame = this.gameListService.clone(this.copyGame);
  }

}
