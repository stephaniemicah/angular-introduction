import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    title: 'Notes',
    component: NotesComponent,
  },
  {
    path: 'notes/:id',
    title: 'Note Details',
    component: NoteComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    children: [
      {
        path: 'projects',
        title: 'Projects',
        component: AboutProjectsComponent,
      },
      {
        path: 'sponsors',
        title: 'Sponsors',
        component: AboutSponsorsComponent,
      },
    ],
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: NotFoundComponent,
  }
];

