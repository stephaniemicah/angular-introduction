import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessages() {
    return ['message1', 'message2', 'message3'];
  }
}
