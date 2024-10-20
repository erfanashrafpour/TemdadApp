export interface ResponseModel<T> {
  data:T;
  status:boolean;
  statusCode:number;
  message:string;
  meta:any;
}
