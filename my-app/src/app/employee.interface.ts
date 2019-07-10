export interface EmployeeInterface{
  firstname: string;
  lastname: string;
  project: string;
  position: string;
  manager?: string; //optional 
  team?: string[];

}
