
import { useEffect, useState } from "react";
import Card from "../components/Card";


function Home() {

    const [search, setSearch] = useState('');

    const [foodItems, setFoodItems] = useState([]);
    const [foodCat, setFoodCat] = useState([]);

    async function getDataFromServer() {
        try{
            const response = await fetch("http://localhost:4000/api/v1/foodData", {
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            });

            if(response.ok) {
                const result = await response.json();
                console.log("result of data from server : ", result);

                setFoodItems(result.foodData);
                setFoodCat(result.category);

                
            }
        }
        catch(err) {
            console.log("Error at client while fetching data from server : ", console.error.message);
        }
    }

    useEffect(() => {
        getDataFromServer();
    }, []);

    function changeHandler(e) {
        setSearch(e.target.value);
    }

    return(
        <div>
            Home

            <input 
            type="text"
            placeholder="search your favourite food"
            name="search"
            id="search"
            onChange={(e) => changeHandler(e)}
            value={search}
            />

            {
                foodCat
                ?
                foodCat.map( (category) => (
                    <div key={category._id}>
                        <div>
                            {category.CategoryName}
                        </div>

                        <hr/>

                        {
                            foodItems
                            ?
                            foodItems.filter( (item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                            .map( (filterItem) => (

                                <div key={filterItem._id}>

                                    {/* {filterItems.name} */}
                                    <Card filterItem={filterItem} />

                                </div>
                            ))
                            :
                            (<div>
                                No any item exists
                            </div>)
                        }

                    </div>

                    

                ))
                :
                (<div>
                    No
                </div>)
            }
            
        </div>
    )
}

export default Home;