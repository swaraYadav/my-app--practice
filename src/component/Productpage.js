import ProductItem from './Productitem';
const Products=[
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
    {
        imageUrl :"https://rukminim1.flixcart.com/image/452/542/kpft18w0/night-suit/i/m/y/m-green-m-shree-hariom-collection-original-imag3z9h5zbfufbj.jpeg",
        amount:"345"
    },
]
        

function Productpage(){
    return(
        <div className="productlist">
            {Products.map((Product) => {
                return (
                    <ProductItem imageUrl={Product.imageUrl} amount={Product.amount} />
                )
            })
            }
        </div>
    )
}
export default Productpage;