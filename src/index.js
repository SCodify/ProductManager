const ProductManager = require('./ProductManager')
const productManager = new ProductManager("./miArchivo.txt");

const testing = async () => {
    const consulta1 = await productManager.getProducts()
    console.log(consulta1)
    
    await productManager.addProduct(
        'producto prueba 1',
        'Este es un producto de prueba 1',
        200,
        'Sin imagen',
        'abc123',
        25
    )

    await productManager.addProduct(
        'producto prueba 2',
        'Este es un producto de prueba 2',
        300,
        'Sin imagen',
        'def456',
        45
    )

    await productManager.addProduct(
        'producto prueba 3',
        'Este es un producto de prueba 3',
        100,
        'Sin imagen',
        'ghi789',
        90
    )

    /* Producto con código repetido */
    // await productManager.addProduct(
    //     'producto prueba 4',
    //     'Este es un producto de prueba 4',
    //     10,
    //     'Sin imagen',
    //     'ghi789',
    //     1
    // )

    await productManager.addProduct(
        'producto prueba 4',
        'Este es un producto de prueba 4',
        180,
        'Sin imagen',
        'vio519',
        45
    )

    await productManager.addProduct(
        'producto prueba 5',
        'Este es un producto de prueba 5',
        53,
        'Sin imagen',
        'ngo603',
        92
    )

    await productManager.addProduct(
        'producto prueba 6',
        'Este es un producto de prueba 6',
        75,
        'Sin imagen',
        'oro283',
        15
    )

    await productManager.addProduct(
        'producto prueba 7',
        'Este es un producto de prueba 7',
        13,
        'Sin imagen',
        'gpq683',
        45
    )

    await productManager.addProduct(
        'producto prueba 8',
        'Este es un producto de prueba 8',
        19,
        'Sin imagen',
        'yrf675',
        98
    )

    await productManager.addProduct(
        'producto prueba 9',
        'Este es un producto de prueba 9',
        12,
        'Sin imagen',
        'psd649',
        87
    )

    await productManager.addProduct(
        'producto prueba 10',
        'Este es un producto de prueba 10',
        64,
        'Sin imagen',
        'dfp520',
        67
    )

    await productManager.addProduct(
        'producto prueba 11',
        'Este es un producto de prueba 11',
        46,
        'Sin imagen',
        'opd541',
        61
    )

    await productManager.addProduct(
        'producto prueba 12',
        'Este es un producto de prueba 12',
        77,
        'Sin imagen',
        'fbo895',
        10
    )

    await productManager.addProduct(
        'producto prueba 13',
        'Este es un producto de prueba 13',
        63,
        'Sin imagen',
        'yno654',
        32
    )

    await productManager.addProduct(
        'producto prueba 14',
        'Este es un producto de prueba 14',
        78,
        'Sin imagen',
        'bdf381',
        51
    )

    await productManager.addProduct(
        'producto prueba 15',
        'Este es un producto de prueba 15',
        30,
        'Sin imagen',
        'hti951',
        25
    )

    await productManager.addProduct(
        'producto prueba 16',
        'Este es un producto de prueba 16',
        75,
        'Sin imagen',
        'bre541',
        2
    )

    await productManager.addProduct(
        'producto prueba 17',
        'Este es un producto de prueba 17',
        55,
        'Sin imagen',
        'oop124',
        11
    )

    /* Prueba de producto con id inexistente */
    await productManager.getProductById(30)
    
    const consulta2 = await productManager.getProducts()
    console.log(consulta2)
    
    /* Prueba de update de produto con id 1 */
    await productManager.updateProduct(1, { description:"Esta es una prueba de update" })

    await productManager.updateProduct(1, { title:"UPDATE" })

    const consulta3 = await productManager.getProducts()
    console.log(consulta3)

    /* Prueba de borrado de produto con id 2 */
    await productManager.deleteProduct(2)
    
    const consulta4 = await productManager.getProducts()
    console.log(consulta4)
}

testing()