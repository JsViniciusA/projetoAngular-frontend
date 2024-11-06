import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { AdicionadorComponent } from './paginas/adicionador/adicionador.component';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3784982556.
const routes: Routes = [
  { path: '', redirectTo: '/buscador', pathMatch: 'full' },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'adicionador', component: AdicionadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
