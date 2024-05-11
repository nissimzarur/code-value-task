import React from "react";

export const PaginateProductsContext = React.createContext<{currentPage:number, setCurrentPage:(page:number)=>void, take:number}>({currentPage:1, setCurrentPage:()=>{}, take:5});
