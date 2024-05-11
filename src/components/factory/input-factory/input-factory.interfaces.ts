import { IBaseInput } from "@utils/global.interfaces";

export default interface IInputFactory extends IBaseInput{
    type:'regular'|'search'|'money'|'textarea'
    error?:string;
}