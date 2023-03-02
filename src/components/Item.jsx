import React from 'react'
import {Center, Card, CardBody, Image, Heading, Text, Divider, Stack, CardFooter, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import Data from '../data.json'

const Item = ({id, name, stock, category, image}) => {
  
  return (
    <>
    <div key={id}>
    <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image src={image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>

                <Text color="blue.800" fontSize="l">
                  Category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="red">
                  <Link to={`/item/${id}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
      </Center>
    </div>
    </>
  )
}

export default Item