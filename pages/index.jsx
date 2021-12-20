import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import Filter from "./Filter";

const index = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome To Next.JS</h2>
      <ProductCard />
      <Filter />
    </>
  );
};

export default index;
