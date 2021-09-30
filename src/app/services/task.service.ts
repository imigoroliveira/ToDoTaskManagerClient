import { Task } from './../models/task';
import { FiltroPesquisa } from './../models/FiltroPesquisa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = `${environment.apiUrl}/task`;

  constructor(private http: HttpClient) {}

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(
      `${this.baseUrl}/create`,
      task
    );
  }

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/list`);
  }

 
 
  }

}
