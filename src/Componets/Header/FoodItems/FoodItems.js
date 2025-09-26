import React from "react";
import './FoodItems.css';
import ItemDescription from "./ItemDescription/ItemDescription";

const FoodItems=()=>{
    const foodItemList=[
        {id:1,name:"Pizza",price:10,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:2,name:"Burger",price:5,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:3,name:"Pasta",price:8,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:4,name:"vegBiryani",price:120,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:5,name:"ChickenBiryani",price:150,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:6,name:"FriedRice",price:100,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:7,name:"Noodles",price:90,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
        {id:8,name:"Dosa",price:50,image:"https://www.google.com/imgres?q=pizza%20image&imgurl=https%3A%2F%2Frecipesblob.oetker.in%2Fassets%2Fd8a4b00c292a43adbb9f96798e028f01%2F1272x764%2Fpizza-pollo-arrostojpg.webp&imgrefurl=https%3A%2F%2Fwww.oetker.in%2Frecipes%2Fr%2Fchicken-pizza&docid=wV61riaPUWMCHM&tbnid=rWmL7coYkmx_8M&vet=12ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA..i&w=1272&h=764&hcb=2&ved=2ahUKEwiCkO_j6_WPAxWyUGwGHbNTNpAQM3oECBkQAA",description:"This food item have have added more flover and testy.It feels llike home made food and most worth to eat"},
    ]
    

    return(
        <div className="food-items">
            {foodItemList.map((item)=>(
                <div key={item.id} className="food-item" onClick={() => <ItemDescription item={item} />}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name} />
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default FoodItems;