import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from './interfaces/posts.interface';
import { LatestPrices, OrderBook, Student } from './interfaces/data.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService]
})

export class AppComponent implements OnInit {
  messages: string[] = [];
  posts: Post[] = [];
  languages: Array<string> = [];
  student: Student | null = null;

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit() {
  //   this.messagesService.getPosts().subscribe(
  //     (response) => {
  //       this.posts = response;
  //     },
  //   (error) => {
  //     console.error(error);
  //   }
  //  );

      this.messagesService.getPosts().subscribe({
        next: (response: Post[]) => {this.posts = response;},
        error: (error) => {console.error(error);}
      });

      this.messagesService.getLanguages().subscribe({
        next: (response: Array<string>) => {this.languages = response;},
        error: (error) => {console.error(error);}
      });

      this.messagesService.getStudent().subscribe({
        next: (response: Student) => {this.student = response;},
        error: (error) => {console.error(error);}
      });

      this.messagesService.getBookOrders().subscribe({
        next: (bookOrders: OrderBook) => {
          console.log(bookOrders);
        }
      });

      this.messagesService.getLatestPrices().subscribe({
        next: (latestPrices: LatestPrices) => {
          console.log(latestPrices);
        }
      });
  }

  title: string = 'Dependency Injection & Services';

}
