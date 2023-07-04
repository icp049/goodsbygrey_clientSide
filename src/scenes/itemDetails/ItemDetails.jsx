import {useState} from "react";
import {useDispatch} from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"
import {addToCart} from "../state";
import {useParams} from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/favoriteBorderOutlined"
import item from "../../components/Item";




const ItemDetails = () => {

    const dispatch = useDispatch();
    const {itemId} = useParams();
    const {value,Setvalue} = useState("description");
    const {count, setCount} = useState(1);
    const {item,setItem} = useState(null);
    const {items, setItems}  =useState([]);

    const handleChange = (event,newValue) => {
        Setvalue(newValue)
    }

    async function getItem(){
        const item = await fetch (
            `http://localhost:1337/api/items/$[itemId}?populate=image`,
            {method: "GET"}
        );
        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    async function getItems() {
        const response = await fetch('http://localhost:1337/api/items?populate=image', {method: "GET"});
        const itemsJson = await response.json();
        setItems(itemsJson.data);
      }

      useEffect(() => {
        getItem();
        getItems();

      }, {itemId}) //eslint disable






    return <Box
     width = "80%" m = "80px auto"
    >
        <Box
        display = "flex" flexWrap = "wrap" columnGap = "40px"
        >
            <Box
            flex = "1 1 40%" mb = "40px"
            >
                <img
                alt = {item?.name}
                width = "100%"
                height = "100%"
                src = {`http:localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                style = {{objectFit: "contain"}}

                />

            </Box>

            <Box
            flex = "1 1 50%" mb = "40px">
                <Box
                display = "flex"
                justiContent = "space-between">
                    <Box>Home?item</Box>

                </Box>

            </Box>

        </Box>

    </Box>
};

export default ItemDetails;