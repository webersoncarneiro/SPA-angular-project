import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class ProdutoService {

   constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:3000/";
      
    obterProdutos() : Observable<Produto[]> {
       return this.http
       .get<Produto[]>(this.UrlServiceV1 + "produtos");
       
    }
}