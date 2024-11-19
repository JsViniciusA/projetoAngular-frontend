import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { SemShowPipe } from './pipes/sem-show.pipe';
import { AmpliaDirective } from './directives/amplia.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DeslizaDirective } from './directives/desliza.directive';
import { LancamentosComponent } from './paginas/lancamentos/lancamentos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    ListagemComponent,
    SemShowPipe,
    AmpliaDirective,
    DeslizaDirective,
    LancamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
