const ProductCard = () => {
  return (
    <div className="container-">
      <div className="row">
        <div className="col-3">
          <h4>Categories</h4>
          <h4>Rating Item</h4>
          <h4>Price Filter</h4>
        </div>
        <div className="col-9">
          <div className="product_card">
            <div className="product_card image">
              <image src="#" />
            </div>
            <div className="product_card desc">
              <div className="title"></div>
              <div className="price_rate"></div>
              <div className="description"></div>
              <div className="icons"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
