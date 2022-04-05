import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

produtos : Produto[];
colunas: string[] = ['id','nome','descricao','acoes'];

  constructor(private service: CadastroService) { 
  this.produtos = {} as Produto[];
}
  ngOnInit(): void {

    this.service.listar().subscribe(produtos =>{ 
      console.log(produtos);
      this.produtos = produtos;

    });
  }

}
