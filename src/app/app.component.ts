import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesComponent, NoteComponent, RouterLink, RouterModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = 'Routing';

  constructor(private router: Router) {}

  navigateToNotes(): void {
    this.router.navigate(['/notes']);
  }

  navigateToNote(id: number): void {
    this.router.navigate(['/notes', id]);
  }
}
