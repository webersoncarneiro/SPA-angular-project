import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import {FormsModule} from '@angular/forms';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import  localePt   from '@angular/common/locales/pt';
import { OutletComponenteComponent } from './outlet-componente/outlet-componente.component';
//import { CarouselComponent } from 'angular-responsive-carousel';
//import { IvyCarouselModule } from 'angular-responsive-carousel';
//import {NgxPaginationModule} from 'ngx-pagination';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    //NgxPaginationModule,
    SobreComponent,
    ContatoComponent,
    ListaProdutoComponent,
    OutletComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //IvyCarouselModule,
   // NgxPaginationModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
