const express = require ('express')
const mysql = require('mysql')
const myconn = require('ecpress-myconnection')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306
}

//middlewares
app.use(myconn(mysql, dboptions, 'single'))


// estas son las rutas
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})


// aqui corre el servidor
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})