function Cards({ image, picName, onPress }) {
  // console.log(picName)

  return (
    <div className="product-card" onClick={onPress}>
      <img src={image} />
      <h1 className="product-name">{picName}</h1>
    </div>
  );
}

export default Cards;
