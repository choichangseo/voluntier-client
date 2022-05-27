import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import ProductDetailUI from "./ProductDetailPresenter";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { DELETE_PRODUCT, FETCH_PRODUCT } from "./ProductDetailQueries";

const CREATE_DIBS = gql`
  mutation createDibs($productId: String!) {
    createDibs(productId: $productId) {
      id
    }
  }
`;

export default function ProductDetail() {
  const router = useRouter();
  const [, setIsEdit] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  const [createDibs] = useMutation(CREATE_DIBS);
  const onToggleModal = () => {
    setIsClosed((prev) => !prev);
  };

  const CreateDibs = async (event) => {
    try {
      const result = await createDibs({
        variables: { productId: event.target.id },
      });
      console.log(result);
      Modal.success({ content: "찜했다냥! 마이페이지에서 확인하시개!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const ProductEdit = () => {
    setIsEdit(true);
    router.push(`/products/${router.query.productId}/edit`);
  };

  const ProductDelete = async () => {
    try {
      const result = await deleteProduct({
        variables: { productId: router.query.productId },
      });
      console.log(result);
      Modal.success({ content: "게시물 삭제에 성공했습니다." });
      router.push("/products");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <ProductDetailUI
      data={data}
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      onToggleModal={onToggleModal}
      ProductEdit={ProductEdit}
      ProductDelete={ProductDelete}
      CreateDibs={CreateDibs}
    />
  );
}
