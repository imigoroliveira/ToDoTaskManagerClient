import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome!: string;
  descricao!: string;
  prioridade!: string;
  data!: string;


  constructor(private service: TaskService, private router: Router) { }

  ngOnInit(): void{}

  cadastrar(): void
    {
        let task : Task = {
            nome: this.nome,
            descricao: this.descricao,
            prioridade: this.prioridade,
            data: this.data,
        };
        //Chamar o create do service
        this.service.create(task).subscribe(task => {
            console.log(task);
            this.router.navigate(["task/listar"]);
        });
    }
}
