import 'zone.js/dist/zone';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'joke',
  standalone: true,
  template: `
    <h1>What did the cheese say when it looked in the mirror?</h1>
    <p>Halloumi (Hello Me)</p>
  `,
})
class JokeComponent {}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, JokeComponent], 

  templateUrl: './app.html',
})
export class App {
  name = 'Angular';
}

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [JokeComponent, App],
//   bootstrap: [JokeComponent, App],
// })
export class AppModule {}
//platformBrowserDynamic().bootstrapModule(AppModule);
bootstrapApplication(App);
