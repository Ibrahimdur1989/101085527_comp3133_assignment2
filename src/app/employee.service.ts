import { Injectable } from "@angular/core";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private graphqlUrl = 'http://localhost:8081/graphql';

    async getEmployees(): Promise<Employee[]> {
        const query = `
          query {
            getAllEmployees {
              id
              firstName
              lastName
              email
              department
              position
              salary
              profilePicture
            }
          }
        `;

        const response = await fetch(this.graphqlUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        return result.data.getAllEmployees;
    }
}