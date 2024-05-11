import React from "react";

export const PaginateProductsContext = React.createContext({currentPage:1, setCurrentPage:(page:number)=>{}, take:5});
