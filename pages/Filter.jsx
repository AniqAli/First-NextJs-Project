const Filter = () => {
  return (
    <>
      <div
      // style={
      //   {
      //       backgroundColor: "#232323",
      //       width: "fit-content",
      //       padding: ".8rem",
      //       borderRadius: "5px",
      //   }
      // }
      >
        <input type="search" placeholder="Filters" />
        <div class="custom-select" style={{ width: "200px" }}>
          <select>
            <option value="0">Select Product</option>
            <option value="1">Product 01</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
