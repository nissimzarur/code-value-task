import { HTMLProps, ReactNode } from "react";
import { IBaseInput } from "utils/global.interfaces";

export default interface IInput extends IBaseInput {
    error?:string;
    icon?:ReactNode;
}
