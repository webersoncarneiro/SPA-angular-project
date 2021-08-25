import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet-componente.component.html',
  styles: []
})

export class OutletComponenteComponent implements OnInit {
  title = 'Contato de nossos vendedores'

  paginaAtual: boolean = false;

  public dadosAlunos = [];
  pag: Number = 1;
  contador: Number = 5;

  constructor() {
    console.log('Aplicação iniciada, carregando dados');

    this.dadosAlunos = [
      { 'id': 1, 'nome': 'Clare Cornau', 'fone': '(815) 6180492', 'email': 'ccornau0@bigcartel.com', 'sexo': 'Feminino', 'pais': 'Somalia' },
      { 'id': 2, 'nome': 'Edouard Elsmore', 'fone': '(507) 3119958', 'email': 'eelsmore1@goo.gl', 'sexo': 'Masculino', 'pais': 'United States' },
      { 'id': 3, 'nome': 'Aeriel Elldred', 'fone': '(478) 7181722', 'email': 'aelldred2@archive.org', 'sexo': 'Feminino', 'pais': 'Russia' },
      { 'id': 4, 'nome': 'Yan Chi Mung', 'fone': '(698) 4411762', 'email': 'ameachem3@columbia.edu', 'sexo': 'Feminino', 'pais': 'China' },
      { 'id': 5, 'nome': 'Jeremiah Hadwen', 'fone': '(345) 6582965', 'email': 'jhadwen4@contakte.ru', 'sexo': 'Masculino', 'pais': 'Mongolia' },
      { 'id': 6, 'nome': 'Romilada Andrade', 'fone': '(659) 9557733', 'email': 'romildandr@times.com', 'sexo': 'Masculino', 'pais': 'Belgica' },
      { 'id': 7, 'nome': 'Ramirez Gonzales', 'fone': '(864) 2101861', 'email': 'ramgonz@yellowbook.com', 'sexo': 'Masculino', 'pais': 'Peru' },
      { 'id': 8, 'nome': 'Jayme Crotty', 'fone': '(165) 5814372', 'email': 'jcrotty7@opensource.org', 'sexo': 'Masculino', 'pais': 'Niger' },
      { 'id': 9, 'nome': 'Margo Braker', 'fone': '(428) 2282928', 'email': 'mbraker8@yahoo.co.jp', 'sexo': 'Feminino', 'pais': 'Argentina' },
      { 'id': 10, 'nome': 'Bernardo Guzman', 'fone': '(673) 5170425', 'email': 'bernardguz@google.com', 'sexo': 'Feminino', 'pais': 'Uruguai' },
      { 'id': 11, 'nome': 'Darelle Rowlands', 'fone': '(978) 8885907', 'email': 'drowland@slate.com', 'sexo': 'Feminino', 'pais': 'Indonesia' },
      { 'id': 12, 'nome': 'Neile Keets', 'fone': '(956) 9360112', 'email': 'nkeetsb@canalblog.com', 'sexo': 'Feminino', 'pais': 'Finlandia' },
      { 'id': 13, 'nome': 'Sonia Buarque', 'fone': '(055) 7150720', 'email': 'soniabuarque@so-net.net', 'sexo': 'Feminino', 'pais': 'Brasil' },
      { 'id': 14, 'nome': 'Ana Maria Rocha', 'fone': '(055) 4076124', 'email': 'anamaria@com.com', 'sexo': 'Masculino', 'pais': 'Brasil' },
      { 'id': 15, 'nome': 'Carola Balasin', 'fone': '(262) 7945277', 'email': 'cbalasine@blogger.com', 'sexo': 'Feminino', 'pais': 'Bolivia' },
      { 'id': 16, 'nome': 'Ming Liu Siang', 'fone': '(501) 3984600', 'email': 'cbarrickf@t-online.de', 'sexo': 'Feminino', 'pais': 'China' },
      { 'id': 17, 'nome': 'Inglis Treweela', 'fone': '(718) 4157883', 'email': 'itreweelag@tripod.com', 'sexo': 'Masculino', 'pais': 'Finlandia' },
      { 'id': 18, 'nome': 'Manoel Soares', 'fone': '(213) 5730967', 'email': 'manusoares@yahoo.com', 'sexo': 'Masculino', 'pais': 'Portugal' },
      { 'id': 19, 'nome': 'Hestia Palffrey', 'fone': '(349) 6453938', 'email': 'hpalffreyi@nba.com', 'sexo': 'Feminino', 'pais': 'Madagascar' },
      { 'id': 20, 'nome': 'Papoulous Mordon', 'fone': '(474) 3068249', 'email': 'gmordonj@uiuc.edu', 'sexo': 'Feminino', 'pais': 'Grécia' }
    ];
  }
  ngOnInit() {
  }

  mudarPaginaAtual(){
    this.paginaAtual = !this.paginaAtual;
  }

}



