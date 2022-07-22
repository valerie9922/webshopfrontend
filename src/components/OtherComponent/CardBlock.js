const CardBlock = ({ title, price, image }) => {
  return (
    <div>
      <li>
        <div className="pcimage">
          <img src={image} alt={"Product Image"} className="cardImage" />
          {title}
        </div>
        <div className="pcprice">{price}</div>
        <div className="pcquantity">Quantity</div>
        <div className="pctotal">Total</div>
      </li>
    </div>
  );
};

export default CardBlock;
