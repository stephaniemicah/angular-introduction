import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService]
})

export class AppComponent {
  messages: string[] = [];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  title: string = 'Dependency Injection & Services';

}
