const ProductCard = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#232323",
          width: "fit-content",
          padding: ".8rem",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <div>
            <img
              src="/productImg.png"
              alt=""
              width="80"
              height="80"
              style={{ marginTop: "1.3rem" }}
            />
          </div>
          <div style={{ color: "whitesmoke" }}>
            <h4>Product Name</h4>
            <h5 style={{ color: "lightslategrey", marginTop: "-.4rem" }}>
              Brand Name
            </h5>
            <h6 style={{ marginTop: "-.4rem" }}>$ 29.00</h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "3rem",
            color: "lightslategrey",
            marginTop: "-1.3rem",
            fontSize: "14px",
          }}
        >
          <p>Location</p>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <p>Date:</p>
            <p>10-12-21</p>
          </div>
        </div>
        <div
          style={{
            color: "lightslategrey",
            marginTop: "-1rem",
            fontSize: "12px",
          }}
        >
          <p>Description of the product/Item.</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
