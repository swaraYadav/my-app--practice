function ProductItem(props){
    return(
        <div className="product">
            <img src={props.imageUrl} alt="logo"/>
            <p className="center">{props.amount} Rs Only</p>
            <div className="buttonWrapper">
                <button className="Btn">Buy Now</button>
                <button className="Button">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;