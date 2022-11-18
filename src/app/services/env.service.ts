import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// injection de l'API

export class EnvService {
  API_URL = 'http://127.0.0.1:8000/api/auth/';

  constructor() { }
}
