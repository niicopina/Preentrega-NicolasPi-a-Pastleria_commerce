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
import '../index.css'
import { Link } from "react-router-dom";
import SendOrder from "./SendOrder";

const Cart = () => {
  const {cart, setCart} = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [contador, setContador] = useState(0);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };


  const sumar = () => {
    setContador (contador + 1);
  }
  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading className="head-carro" as="h2" size="2xl">
          Carrito     =    <Text as="b">Precio total: $ {totalPrice}</Text>
        </Heading>
      </Center>
      <Button bg='tomato' colorScheme='teal' color='black' size='md'><Link to="/menu">Volver al Menu</Link></Button>
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
                <Button colorScheme="red" onClick={() =>handleDelete(item.id)}>Eliminar</Button>
              </CardFooter>
              <Text>total por unidades: $ {item.price * item.quantity}</Text>
            </Card>        
          </Container>
        );
      })}
      <div>
      <SendOrder />
      </div>
    </>
  );
};

export default Cart;