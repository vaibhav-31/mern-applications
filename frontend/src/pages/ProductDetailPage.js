import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";

function ProductDetailPage() {
  return (
    <>
      <Navbar>
        <ProductDetails />
      </Navbar>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
