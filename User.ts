export interface User {
    name:string,
    age:number,
    gender:string;
    id?:number,
    sayhello?(name:string):string,

}