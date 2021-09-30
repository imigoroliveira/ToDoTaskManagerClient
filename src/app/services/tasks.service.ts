import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService{
    private baseURL = "http://localhost:5000/api/task";


    constructor(private http: HttpClient) { }

    list(): Observable<Task[]>
    {
        return this.http.get<Task[]>(`${this.baseURL}/list`);
    }

    create(task: Task): Observable<Task>
    {
        return this.http.post<Task>(`${this.baseURL}/create`, task);
    }
}
