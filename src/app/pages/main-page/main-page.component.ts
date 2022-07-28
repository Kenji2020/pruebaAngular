import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from 'src/app/interfaces/personajes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
personajes: Personajes[] | undefined;
personajesCopy: Personajes[] | undefined;

  constructor(public http: HttpClient) { 
    this.http.get<any>('https://breakingbadapi.com/api/characters').subscribe((data) => {
      console.log(data)
      this.personajes = data.map(({char_id, name, birthday, occupation, img, status, nickname, appearance, portrayed}:Personajes) => {  
        return{
          char_id: char_id,
          name: name,
          birthday:birthday,
          occupation: occupation,
          img: img,
          status: status,
          nickname: nickname,
          appearance: appearance,
          portrayed:portrayed,
        }
      })
    this.personajesCopy = this.personajes
  }
    );
  }

  filter(e:any){
    const search :string = e.target.value;
    this.personajes = this.personajesCopy?.filter(personaje => personaje.name.toLowerCase().includes(search.toLowerCase()));
  }


}
