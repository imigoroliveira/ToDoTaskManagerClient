import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';


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


  constructor(private service: TasksService, private router: Router) { }

  ngOnInit(): void{}

  cadastrar(): void
    {
          let task : Task = {
          nomeTask: this.nome,
          descricaoTask: this.descricao,
          prioridade: this.prioridade,
          dataTask: this.data
        };
        this.service.create(task).subscribe(task => {
            console.log(task);
            this.router.navigate(["tasks/listar"]);
        });
    }
}
