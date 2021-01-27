# Ecommerce Halias React

Este es un ecommerce desarrollado para la empresa Halias Energía Pensada, capaz de mostrar todo el catálogo de productos de la marca consumiendo la API Fetch. 
Tiene la capacidad de filtrar productos por categoría, marca, etc, más finalizar la compra a traves de un "carrito de compras".

## Actualización:

En este momento el catálogo de productos viene harcodeado y muestra productos y categorías de prueba.
La navegación entre secciones está en funcionamiento gracias al enrutamiento realizado con (react-router-dom), así mismo los filtros por categorías, mostrando los productos correspondientes a 2 categorías y una tercera sin productos asociados que retorna el mensje "Sin productos para esta categoría". Esta funcionalidad se logra ejecutando lo Hooks (useState) y (useEffect). Además para la navegación por categorías y el detalle de producto, se utiliza (useParams), permitiendo tomar como parámetros las diferentes categorías seleccionadas, y la url del item al ingresar a sus detalles.
La funcionalidad de "agregar al carrito" está en desarrollo. Por el momento solo funciona el contador de items, que dispone de una alerta al usuario al alcanzar el máximo disponible en stock para cada producto. esta función se logro con (useState).


## Arquitectura de la aplicación:

El desarrollo se centra



### Introducción a la aplicación Create React

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

### Scripts disponibles

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo. \
Si la aplicación no se abre en su navegador predeterminado de forma automática, abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones. \
También verá cualquier error de pelusa en la consola.

* uno
* dos
* tres
