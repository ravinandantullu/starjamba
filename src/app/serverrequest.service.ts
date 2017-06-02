import { Injectable } from '@angular/core';

@Injectable()
export class ServerrequestService {

  constructor() { }

  public validate(url: string): Promise<any> {
    return Promise.resolve({
      username: "test@gmail.com",
      password: "test1",
    })
  }

}
