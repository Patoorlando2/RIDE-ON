
// function ProductosDestacados({ title, productos = [] }) {

//   return (
//     <>
//     <div className="container p-4">
//         <div className="row">
//             <div className="col-lg-12 text-center fw-bold mt-3">
//                 <h2>{title}</h2>
//             </div>
//         </div>
//     </div>

//     <div className="container">
//         <div className="row">
//             <div className="col-lg-12">
//                 <div className="swiffy-slider slider-item-show3 slider-nav-round slider-nav-page">
//                     <ul className="slider-container">
//                         {productos.map((producto) =>
                        
//                         <li key={producto.id_producto}>
//                             <div className="card border-0">
//                                 <div className="ratio ratio-1x1">

//                                     <img src={producto.imagen.url_completa} className="card-img-top" loading="lazy" alt="..." />
//                                 </div>
//                                 <div className="card-body p-0 pt-2">
//                                     <div className="d-flex">
//                                         <h3 className="flex-grow-1 h5">{producto.nombre_producto}</h3>
//                                         <p className="px-2">$ {producto.precio}</p>
//                                     </div>
//                                     <p className="card-text">{producto.categoria.categoria}</p>
//                                 </div>
//                             </div>
//                         </li>
//                         )}
//                     </ul>
//                     <button type="button" className="slider-nav" aria-label="Go left"></button>
//                     <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
      
    
//   )
// }
function ProductosDestacados({ title, productos = [] }) {

  return (
    <>
      <div className="container p-4 text-center">
        <h2 className="fw-bold">{title}</h2>
      </div>

      <div className="container">
        <div className="row g-3">
          
          {productos.map((producto) => (
            <div className="col-12 col-md-6 col-lg-3" key={producto.id_producto}>
              <div className="card h-100">
                <img
                  src={producto.imagen.url_completa}
                  className="card-img-top"
                  alt={producto.nombre_producto}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre_producto}</h5>
                  <p className="card-text">{producto.categoria.categoria}</p>
                  <strong>${producto.precio}</strong>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default ProductosDestacados
