import { Routes } from '@angular/router'
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { OutletComponenteComponent } from './outlet-componente/outlet-componente.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path : 'contato' , component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'produtos', component:ListaProdutoComponent},
    {path: 'outlet', component:OutletComponenteComponent},
];