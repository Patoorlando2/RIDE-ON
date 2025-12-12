import React from 'react'

function TopBar() {
  return (
    <div className="container-fluid mx-auto py-0 bg-dark">
      <div className="row">

        <div className="col-lg-4">
          <div className="text-center"> 
            <h6 className='text-white fs-7'>Hasta 18 cuotas sin interés</h6>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="text-center"> 
            <h6 className='text-white fs-7'>Todas las categorías de motos</h6>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center"> 
            <h6 className='text-white fs-7'>Sacala sólo con tu DNI</h6>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar
