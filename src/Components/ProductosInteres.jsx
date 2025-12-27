import React from 'react'

function ProductosInteres({interes}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2>También pueden interesarte</h2>
            </div>
        </div>
        <div className="col-lg-12 text-center">
          {interes.map( (i) => i)}
        </div>
    </div>
  )
}

export default ProductosInteres
