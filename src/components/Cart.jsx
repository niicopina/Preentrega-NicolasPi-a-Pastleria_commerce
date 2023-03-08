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
        <Heading as="h2" size="2xl">
          Cart     =    <Text as="b">Precio total: $ {totalPrice}</Text>
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
                <Button colorScheme="red" onClick={() =>handleDelete(item.id)}>Eliminar</Button>
              </CardFooter>
              <Text>total por unidades: $ {item.price * item.quantity}</Text>
            </Card>        
          </Container>
        );
      })}
    {/* <SendOrder /> */}
    </>
  );
};

export default Cart;