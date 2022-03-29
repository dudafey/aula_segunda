import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/models/cadastro.service';
import { Produtos } from '../produto';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos = Produtos;
  constructor(private service: CadastroService) { }

  ngOnInit(): void {

    this.service.listar().subscribe(produto =>{ 
      console.log(produto);

    });
  }

}
