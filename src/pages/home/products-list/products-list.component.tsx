import { Box, Text } from "@components/base";
import ProductCard from "./product-card/product-card.component";
import { observer } from "mobx-react-lite";
import { IProduct } from "@utils/global.interfaces";

const ProductsList = observer(({paginateProducts}:{paginateProducts:IProduct[]}) => {

  if (!paginateProducts.length)
    return (
      <Box>
        <Text>The product list is empty, please add products to the list!</Text>
      </Box>
    );

  return (
    <Box className="flex flex-col gap-5">
      {paginateProducts.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </Box>
  );
});
export default ProductsList;
