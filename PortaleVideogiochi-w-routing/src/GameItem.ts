export class GameItem{
    id: string;
    nome: string;
    descrizione: string;
    genere: string;
    rating: number;    
    prezzo: number;
    annoUscita: Date;
    consoleType: string;

    constructor(id: string = "KJBK43", nome: string = "Topolino", descrizione: string = "Gioco bbbbelloooo", genere: string = "sparatutto", rating: number = 5, prezzo: number = 12.99, annoUscita: Date = new Date(1968-11-16),consoleType: string = "PS4"){
        this.id=id;
        this.nome=nome;
        this.descrizione=descrizione;
        this.genere = genere;
        this.rating = rating;    
        this.prezzo = prezzo;
        this.annoUscita = annoUscita;
        this.consoleType = consoleType;
    }
    
}