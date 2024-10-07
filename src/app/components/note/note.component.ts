import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {

  noteId!: string | null;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.noteId = params.get('id');
    });
  }
}
