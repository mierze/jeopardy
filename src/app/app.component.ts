import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameReady: boolean = false;
  name: string = '';
  jeopardy: number = 1;
  players: any = [];
  vals: number[] = [200, 400, 600, 800, 1000];
  updatePlayer(p): void {
    p.score += parseInt(p.roundScore);
    p.roundScore = '';
  }

  addPlayer(p) {
    this.players.push({ name: p, score: 0, roundScore: '' });
    this.name = '';
    if (this.players.length == 5) {
      //   this.gameReady = true;
    }
  }

  switchJeopardy(to) {
    this.jeopardy = to;
    if (to == 2) {
      this.vals = [400, 800, 1200, 1600, 2000];
    } else {
      this.vals = [200, 400, 600, 800, 1000];
    }
  }

  addPoints(p, howmany) {
    p.score += howmany;
  }

  subPoints(p, howmany) {
    p.score -= howmany;
  }

  save() {
    window.localStorage.setItem('game', JSON.stringify(this.players));
  }

  recover() {
    let game = window.localStorage.getItem('game');
    if (game != null) {
      this.players = JSON.parse(game);
    }
  }
}
