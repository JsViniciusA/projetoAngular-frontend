import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';
import { AdicionadorComponent } from './paginas/adicionador/adicionador.component';
import { SemPrecoPipe } from './pipes/sem-preco.pipe';
import { AmpliaDirective } from './directives/amplia.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DeslizaDirective } from './directives/desliza.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    ListagemComponent,
    SemPrecoPipe,
    AmpliaDirective,
    AdicionadorComponent,
    DeslizaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
