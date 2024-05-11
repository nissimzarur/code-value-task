import { Box, Text, Textarea } from "@components/base";
import useLoadProduct from "./hooks/useLoadProduct.hook";
import InputFactory from "@components/factory/input-factory/input-factory.component";
import ButtonFactory from "@components/factory/button-factory/button-factory.component";
import { observer } from "mobx-react-lite";
import useAddProduct from "./hooks/useAddProduct.hook";
import useProductForm from "./hooks/useProductForm.hook";

const ProductDetails = observer(() => {
  const product = useLoadProduct();
  const addProduct = useAddProduct();
  const { handleProductForm, productForm, formValidation } = useProductForm(product);

  return (
    <>
      {product ? (
        <Box className="flex flex-col gap-5 border-2 p-5 ">
          <Box>
            <img src={product.image} />
          </Box>
          <Box className="flex flex-col">
            <Text>Name</Text>
            <InputFactory
              type="regular"
              value={productForm.name}
              placeholder={product.name}
              title="Name"
              error={formValidation.name.error}
              onChange={(event) => {
                handleProductForm("name", event.currentTarget.value);
              }}
            />
          </Box>
          <Box className="flex flex-col">
            <Text>Description</Text>
            <Textarea
              error={formValidation.description.error}
              placeholder={product.description}
              value={productForm.description}
              onChange={(event) => {
                handleProductForm("description", event.currentTarget.value);
              }}
            />
          </Box>
          <Box className="flex flex-col">
            <Text>Price</Text>
            <InputFactory
              error={formValidation.price.error}
              placeholder={`${product.price}`}
              type="money"
              value={productForm.price}
              onChange={(event) => {
                handleProductForm("price", parseInt(event.currentTarget.value));
              }}
            />
          </Box>
          <Box className="flex justify-end">
            <ButtonFactory
            disabled={!formValidation.name.isValid || !formValidation.price.isValid}
              type="success"
              onClick={() => {
                addProduct(productForm);
              }}
            >
              Save
            </ButtonFactory>
          </Box>
        </Box>
      ) : null}
    </>
  );
});
export default ProductDetails;
