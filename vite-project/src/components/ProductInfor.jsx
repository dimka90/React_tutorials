

export default function ProductInfo() {
    const Device= {
        name:"HP",
        price: 1200,
        availabilty: "In Stock"
    
    }
  return (
    <div>
        <p>Name: {Device.name}</p>
        <p>Price: {Device.price}</p>
        <p>Availability: {Device.availabilty}</p>
    </div>
  );
}

