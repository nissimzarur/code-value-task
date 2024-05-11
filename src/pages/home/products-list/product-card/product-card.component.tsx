import { Box, Text } from "@components/base";
import ButtonFactory from "@components/factory/button-factory/button-factory.component";
import { IProduct } from "@utils/global.interfaces";
import useSelectProduct from "./hooks/useSelecteProduct.hook";
import useRemoveProduct from "./hooks/useRemoveProduct.hook";

const ProductCard = ({ product }: { product: IProduct }) => {
  const selectProduct = useSelectProduct();
  const removeProduct = useRemoveProduct();
  return (
    <Box className="p-5 border-2 flex flex-row">
      <Box
        className="flex flex-row cursor-pointer w-full"
        onClick={() => {
          selectProduct(product);
        }}
      >
        <Box className="w-44">
          <img src={product.image}></img>
        </Box>
        <Box className="ml-10 flex flex-col gap-5 w-4/5">
          <Text className="text-2xl">{product.name}</Text>
          <Text className="text-xl">{product.description}</Text>
        </Box>
      </Box>
      <Box className="flex self-end">
        <ButtonFactory type="error" onClick={() => removeProduct(product)}>
          Delete
        </ButtonFactory>
      </Box>
    </Box>
  );
};

export default ProductCard;
