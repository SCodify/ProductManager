/* Manejo de archivos

Consigna:
    * Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).

Aspectos a incluir:
    * La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
    * Debe guardar objetos con el sIUdguiente formato:
        - id (se debe incrementar automáticamente, no enviarse desde el cuerpo).
        - title (nombre del producto).
        - description (descripción del producto).
        - price (precio).
        - thumbnail (ruta de imagen).
        - code (código identificador).
        - stock (número de piezas disponibles).
    * Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
    * Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
    * Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto.
    * Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID.
    * Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
Formato del entregable
    * Archivo de javascript con el nombre ProductManager.js. */
const fs = require('fs')

class ProductManager {
    
    productId = 0
    
    constructor(ruta) {
        this.products = []
        this.path = ruta
    }
    
    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            this.productId ++
            
            const newProduct = {
              id: this.productId,
              title,
              description,
              price,
              thumbnail,
              code,
              stock
            }
            
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                throw new Error('Todos los campos son obligatorios')
            }
            
            if (this.products.find(product => product.code === code)) {
                throw new Error('El código del producto ya está en uso')
            }    
            
            this.products.push(newProduct)
      
            await fs.promises.writeFile(this.path, JSON.stringify(this.products))
        } catch (error) {
            console.log(error);
        }
    } 
  
    async getProducts() {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products))
            const contenido = await fs.promises.readFile(this.path, 'utf-8') 
            const arrProducts = JSON.parse(contenido)
            return arrProducts
        } catch (error) {
            console.log(error)
        }
    }
  
    async getProductById(id) {
        try {
            const contenido = await fs.promises.readFile(this.path, 'utf-8')
            const arrProducts = JSON.parse(contenido)
            const product = arrProducts.find(product => product.id === id)
            if (!product) {
              throw new Error('Not found')
            }
            return product
        } catch (error) {
            console.log(error)
        }
    }

    async updateProduct(idUpdate, obj) {
        try {
            let arrProductsEditado = []
            const contenido = await fs.promises.readFile(this.path, 'utf-8')
            const arrProducts = JSON.parse(contenido)
            
            arrProducts.forEach(product => {
              if(product.id == idUpdate){
                let productMerge = {...product, ...obj}
                arrProductsEditado.push(productMerge)
              } else {
                arrProductsEditado.push(product)
              }
            })
      
            await fs.promises.unlink(this.path)
      
            this.products = arrProductsEditado
      
            await fs.promises.writeFile(this.path, JSON.stringify(arrProductsEditado))
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProduct(idDelete) {
        try {
            let arrProductsFiltrado = []
            const contenido = await fs.promises.readFile(this.path, 'utf-8')
            const arrProducts = JSON.parse(contenido)
            
            arrProductsFiltrado = arrProducts.filter(product => product.id != idDelete) 
      
            await fs.promises.unlink(this.path)
      
            this.products = arrProductsFiltrado
      
            await fs.promises.writeFile(this.path, JSON.stringify(arrProductsFiltrado))
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductManager