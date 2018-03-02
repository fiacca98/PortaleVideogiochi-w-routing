import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameListService } from '../game-list.service';
import { GameItem } from '../../GameItem';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  selectedGame: GameItem;

  constructor(private route: ActivatedRoute, private gameListService: GameListService, private router: Router) { 
    this.route.params.subscribe(params => {
      if(params["id"] != "" && params["id"] != null)
        this.selectedGame = this.gameListService.getGameById(params["id"]);
    });
  }

  ngOnInit() {
  }

  changeData(){
    this.router.navigate(["/modifica/" + this.selectedGame.id]);
  }

  isAdmin(): boolean{
    if(sessionStorage.getItem("admin") != null){
      return true;
    }
    else
    return false;
  }

}
