import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LineworksComponent } from './components/lineworks/lineworks.component';
import { PaintingsComponent } from './components/paintings/paintings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'pinturas', component: PaintingsComponent },
  { path: 'lineas', component: LineworksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
