const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Plants', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Plants SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('datos insertados')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Plants WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('datos borrado')
        })
    })
})

module.exports = routes