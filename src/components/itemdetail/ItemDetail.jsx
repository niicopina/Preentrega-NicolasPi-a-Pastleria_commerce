import React from 'react'
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
  Alert,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import './itemdetail.css'
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({ prods }) => {
  const { id } = useParams();
  //const prodFilter = prods.filter((prod) => prod.id == id);
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const db = getFirestore();

    const prodRef = doc(db, "productos", "IGDksdve3ezhIiEysQOs");

    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()){
        setProduct(snapshot.data());
      } else {
        console.log("No data!")
      }
    })
  }, []);

  const prodFilter = prods.filter((prod)=> prod.id == id)

  return (
    <>
      {prodFilter.map((prod) => (
        <div className='items' key={prod.id}>
          <Center className='card-main' p="1rem">
            <Card bg='#9999' colorScheme='teal' className="card-main1">
              <CardBody className="carta">
                <Image borderRadius="md" src={prod.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{prod.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {prod.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Category: {prod.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {prod.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: $ {prod.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <Button bg='tomato' colorScheme='teal' color='black' size='md'>
                  <Link to="/menu">Volver al Menu</Link>
                </Button>
                
                <Button   color='black' size='lg'>
                <ItemCount
                  stock={prod.stock}
                  id={prod.id}
                  price={prod.price}
                  name={prod.name}
                />
                </Button>
                
              
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
{/* 
const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador (contador + 1);
  }

<p>{contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={()=>{
        setContador(contador - 1);
        }}>Restart
      </button>
      <button onClick={()=>{
        setContador(0);
      }}>
        Reset
      </button> */}