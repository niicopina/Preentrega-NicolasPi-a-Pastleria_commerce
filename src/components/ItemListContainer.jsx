import React from 'react'
import data from '../data.json'

const ItemListContainer = () => {
  console.log(data);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject(new Error("no data"));
      }
      setTimeout(()=>{
        resolve(data);
      }, 3000);
    })
  }
  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err)
    }
  }
  fetchingData();

  return (
    <div></div>
  )
}

export default ItemListContainer