import React from 'react'
//import Data from '../data.json'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = ({id}) => {
  const [prods, setProds] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const prodsCollection = collection(db, "productos");
    getDocs(prodsCollection).then((querySnapshot) => {
      const prods = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id, 
      }));
      setProds(prods);
    });
  }, []); 
  //const catFilter = Data.filter((prod) => prod.category === category);
   const catFilter = prods.filter((prod) => prod.category === category);

  return (
       <>
      
      {category ? <ItemList prods={catFilter} /> : <ItemList prods={prods} />}
        
    </>)
}
export default ItemListContainer


{/* <Center bg="tomato" h="120px" color="black" display="flex" alignItems="center">
        <Menu>
          <MenuButton as={Button} >
            Filtrar MENU por categorías
          </MenuButton>
          <MenuList>
          <Link to={`/menu/${id}`}><MenuItem>Pasteles</MenuItem></Link>   
              <MenuItem>Muffins</MenuItem>
              <MenuItem>Festivos</MenuItem>
              <MenuItem>Personalizados</MenuItem>
          </MenuList>
          
        </Menu>
      </Center> */}