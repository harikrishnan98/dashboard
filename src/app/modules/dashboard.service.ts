import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){

    return[{
      Employee_ID: 183163,
      Name: 'Geogre'
    },{
      Employee_ID: 183164,
      Name: 'Bailey'

    },
    {
      Employee_ID: 183165,
      Name: 'Alex'

    },
    {
      Employee_ID: 183166,
      Name: 'John'

    },
    {
      Employee_ID: 183167,
      Name: 'Hari'

    },
    {
      Employee_ID: 183168,
      Name: 'Wick'

    }
  ];
  }

  cards(){
    return [32,44,12,75];
  }
}
