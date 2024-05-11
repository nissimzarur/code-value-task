import { IProduct, IProductUpdate } from "@utils/global.interfaces";
import { useEffect, useRef, useState } from "react";

const useProductForm = (product: IProduct | null) => {
  const [formValidation, setFormValidation] = useState({
    name: { isValid: false, error: "" },
    description: { isValid: true, error: "" },
    price: { isValid: false, error: "" },
  });

  useEffect(() => {
    if (product?.isNew) {
      setFormValidation({
        name: { isValid: false, error: "Required field - cannot be empty" },
        description: { isValid: true, error: "" },
        price: {
          isValid: false,
          error: "Required field - have to be greater than 0",
        },
      });
    } else {
      setFormValidation({
        name: { isValid: true, error: "" },
        description: { isValid: true, error: "" },
        price: { isValid: true, error: "" },
      });
    }
    productForm.description = product?.description || "";
    productForm.name = product?.name || "";
    productForm.price = product?.price || 0;
  }, [product]);

  const productForm = useRef<IProductUpdate>({
    description: product?.description || "",
    name: product?.name || "",
    price: product?.price || 0,
  }).current;

  const handleProductForm = <T extends keyof IProductUpdate>(
    field: T,
    value: IProductUpdate[T]
  ) => {
    if (field === "name" && typeof value === "string") {
      if (value.length === 0)
        return setFormValidation({
          ...formValidation,
          name: { isValid: false, error: "Required field - cannot be empty" },
        });

      if (value.length > 30) {
        return setFormValidation({
          ...formValidation,
          name: {
            isValid: false,
            error: "Field cannot be greater than 30 chars",
          },
        });
      }
    } else if (
      field === "description" &&
      typeof value === "string" &&
      value.length > 200
    ) {
      return setFormValidation({
        ...formValidation,
        description: {
          isValid: false,
          error: "Field cannot be greater than 200 chars",
        },
      });
    } else if ((field === "price" && value === 0) || !value) {
      return setFormValidation({
        ...formValidation,
        price: {
          isValid: false,
          error: "Field have to be greater than 0",
        },
      });
    }

    setFormValidation({
      ...formValidation,
      [field]: { isValid: true, error: "" },
    });

    productForm[field] = value;
  };

  return { handleProductForm, productForm, formValidation };
};
export default useProductForm;
