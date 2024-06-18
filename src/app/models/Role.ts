import { Option } from "./Option";

export class Role extends Option{
    description?:string= "";
    location:string= "";
    department:string= "";
    imgArray:Array<string>= [];
}
