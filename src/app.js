const fs = require('fs')

const importarArchivo = async () => {
    try {
        const contenido = await fs.promises.readFile('./miArchivo.txt', 'utf-8') 
        const arrProducts = JSON.parse(contenido)
        return arrProducts
    } catch (error) {
        console.log(error)
    }
}

const express = require('express')

const port = 8080
const app = express()

app.get('/products', async (req, res) => {
    try {
        const { limit } = req.query

        let products = await importarArchivo()

        if (limit) {
            const productsLimit = products.slice(0, limit)
            return res.json({ message: productsLimit })
        }

        res.json({ message: products })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos.' })
    }
})

app.get('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params

        let products = await importarArchivo()

        const product = products.find(product => product.id == pid)

        res.json({ message: product })
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos.' })
    }
})

app.listen(port, () => {
    console.log(`Server runnig at port ${port}`);
})