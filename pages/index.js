import Product from "../src/models/Product";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../src/utils/Store";
import axios from "axios";
import Layout from "../src/components/Layout";
import db from "../src/utils/db";
import ProductItem from "../src/components/ProductItem";
import { Grid } from "@material-ui/core";

export default function Home(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { products } = props;

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
