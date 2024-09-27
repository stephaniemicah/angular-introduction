import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteService } from './services/note.service';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            CommonModule,
            HttpClientModule,
            NoteFormComponent,
            NoteListComponent,
            ReactiveFormsModule,

  ],
  providers: [NoteService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  selectedNote!: Note;

  selectNote(note: Note) {
    this.selectedNote = note;

  }
}
