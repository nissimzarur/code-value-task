import { IBaseButton } from "@utils/global.interfaces";

export default interface IPagination extends IBaseButton{
    totalElements: number;
    take: number;
    setPage: (page: number) => void;
    currentPage: number;
}