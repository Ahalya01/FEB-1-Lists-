import { Products } from "../Data/Products";
import "./Cards.css";

function Cards() {
  const cardStyles = {
    width: "380px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    background: "#f8f3e8",
    boxShadow: "0 0 40px rgba(0,0,0,0.2)",
    borderRadius: "3px",
  };

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const paragraph ={
    color:"black"
  }

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>This is Cards Section</h1>
      <p className="CardsDescription" style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos repellat amet magnam a sint.
      </p>

      <div style={cardContainer}>
        {Products.map((value) => (
          <div key={value.id} style={cardStyles}>
            <div>
              <img src={value.image} alt={value.title} />
            </div>
            <div style={{color:"black"}}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
              <strong>{value.price}</strong>
              <p>Category: {value.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;

// import { Products } from "../Data/Products"
// function Cards(){
//     const HeadingStyles ={
//         backgroundColor:"black"
//     }
//     const CardStyle={

//     }
//     function mappingProducts(value,index){
//         return(
//             <>
//             <div style={CardStyle}>
//                 <div>
//                     <img src={value.image} alt="" />
//                 </div>
//                 <div>
//                     <h1>{value.title}</h1>
//                     <p>{value.description}</p>
//                     <strong>{value.price}</strong>
//                     <p>category:{value.category}</p>
//                 </div>
//             </div>
//             </>
//         )
//     }
//     return(
//         <>
//         <h1 style={{color:"greenyellow"}}>This Is a Card Section</h1>
//         <p className="CardsDescrption" style={HeadingStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos repellat amet magnam a sint.</p>
        
//         <div>
//         {Products.map(mappingProducts)}
//         </div>
//         </>
//     )
// }
// export default Cards