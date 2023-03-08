import {
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
//import SendOrder from "./SendOrder";

const Cart = () => {
  const {cart, setCart} = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador (contador + 1);
  }
  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: $ {item.price}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() =>{
                  setContador(0);  
                  console.log("Eliminando")}}>
                  quitar
                </Button>
                <Button colorScheme="green" onClick={sumar}>+</Button>
                <Button colorScheme="blue" onClick={()=>{
                      setContador(contador - 1);
                      }}>-</Button>


                {/* <Button onClick={sumar}>Sumar</Button>
                <Button onClick={()=>{
                      setContador(contador - 1);
                      }}>Restar
                      </Button>
                      <Button onClick={()=>{
                        setContador(0);
                      }}>
                          Reset
                      </Button> */}
              </CardFooter>
            </Card>
            <Text>total por unidades: $ {item.price * item.quantity}</Text>
            
          </Container>
          
        );
      })}
    {/* <SendOrder /> */}
    </>
  );
};

export default Cart;