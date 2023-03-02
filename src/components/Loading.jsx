import React from 'react'
import { Spinner } from '@chakra-ui/react'


const Loading = () => {
  return (
    <div>
        <h3>añadiendo</h3>
        <Spinner thickness="6px" speed="0.5s" color="blue.500" size="x1" />
    </div>
  )
}

export default Loading