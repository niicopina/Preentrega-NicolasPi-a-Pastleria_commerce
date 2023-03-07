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
import { useParams} from "react-router-dom";
import './itemdetail.css'
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({ prods }) => {
  const { id } = useParams();
  // console.log(id);
  //const [producto, setProducto] = useState([]);

  const prodFilter = prods.filter((prod) => prod.id == id);

  return (
    <>
      {prodFilter.map((prod) => (
        <div key={prod.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody className="carta">
                <Image className="imagesize" borderRadius="md" src={prod.image} />
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
                
                <Button bg='tomato' colorScheme='teal' color='black' size='md'>
                    Agregar al carrito
                    
                </Button>
                {/* <ItemCount
                  stock={prod.stock}
                  id={prod.id}
                  price={prod.price}
                  name={prod.name}
                />
               */}
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