import React from 'react'

const Item = ({id, name, stock, category}) => {
  return (
    <>
    <div key={id}>
      <div className="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{category}</p>
            <p className="card-text">Stock:{stock}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
    </>
  )
}

export default Item