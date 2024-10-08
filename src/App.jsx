import chinese from "../images/chinese.jpeg";
import pulao from "../images/pulao.jpg";
import nihari from "../images/nihari.jpg";
import daal from "../images/daal chawal.jpg";
import biryani from "../images/biryani.jpg";
import pizza from "../images/3.jpg";
function App() {
  var recipes = [
    {
      title:"Fried Rice",
      img:chinese,
      desc:"Delicious and spicy fried rice with mixed vegetables",
      stock:3,
    },
    {
      title:"Chicken Pulao",
      img:pulao,
      desc:"Chicken Pulao with chicken pieces and fragrant rice.",
      stock:6,
    },
    {
      title:"Chicken Nihari",
      img:nihari,
      desc:"Slow-cooked Nihari with rich, gravy and tender chicken",
      stock:0,
    },
    {
      title:"Daal Chawal",
      img:  daal,
      desc:"Comforting daal with rice, cooked to perfection",
      stock:20,
    },
    {
      title:"Chicken Biryani",
      img:biryani,
      desc:"Flavorful Chicken Biryani with fragrant basmati rice",
      stock:15,
    },
    {
      title:"Pizza",
      img:pizza,
      desc:"Cheesy and savory pizza with a variety of toppings",
      stock:12,
    }
  ]

  return (
    <div className="flex flex-col items-center h-full w-full bg-slate-100 "  style={{ fontFamily: "sans-serif" }}>
      <Header />

      {/* card 01 */}
      
    <div className="flex justify-center items-center w-full h-full flex-wrap ">
      {/* dishes */}
      {recipes.map((dish) => (
          <Dish recipes={dish} /> //recipe(dish)
        ))}
    </div>
<div className="text-center">
    <button className="text-black font-bold bg-orange-600 w-40 h-10 rounded-3xl mb-5 hover:bg-orange-700 text-xl p-1 ">See Full Menu</button>
    </div>
     
</div>
  );
}

export default App;

function Header() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }} className="space-y-5">
      <h1 className="text-6xl font-bold text-yellow-500 max-sm:text-5xl">
      Raj's Flavor Junction
      </h1>
      <h3 className="text-4xl font-bold border-t-4 border-red-700 ">Our Menu</h3>
      <p className="font-semibold text-2xl text-gray-600  italic">
      Savor the taste, feel the delight, Raj’s Flavor Junction – where every bite’s just right!
      </p>
    </div>
  );
}
function Dish({recipes})   {
  return(
<div id="pizza-1" className="w-[20%] bg-slate-200 rounded-2xl p-6 space-y-3  cursor-pointer flex flex-col justify-center items-center flex-wrap md:flex m-10 max-sm:w-full shadow-xl shadow-black/50 max-sm:mx-16 transform transition-transform duration-300 hover:scale-105">
    {recipes.stock===0? <img src={recipes.img} alt="" className="size-48 rounded-2xl" style={{ filter: "grayscale(100%)" }} /> : <img src={recipes.img} alt="" className="size-48 rounded-2xl" />}

  {/* description */}
  <div className="text-center">
    <h3 className="text-3xl font-bold">{recipes.title}</h3>
    <p className="font-semibold">{recipes.desc}</p>
   {recipes.stock===0 ?  <p className="font-bold text-xl text-red-600">Out of Stock</p> :<p className="font-bold text-xl text-green-600"> {recipes.stock}</p>}
  </div>
  {/* button */}
  {recipes.stock===0 ? <button className="text-black font-bold bg-gray-500 w-32 h-8 rounded-2xl mb-5 hover:bg-gray-700 ">Order Now</button> :<button className="text-black font-bold bg-yellow-500 w-32 h-8 rounded-2xl mb-5 hover:bg-yellow-700 ">Order Now</button>}
</div>


      
  );
}