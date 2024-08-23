const connection = require('../config/db.js');
const dotenv = require('dotenv').config();
 
async function storeUser(request, response){
    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.telefone,
        request.body.senha,
    );
 
 
    const query = 'INSERT INTO usuario(email, nome, telefone, senha) VALUES (?, ?, ?, ?, ? )';
 
    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    massage: "Sucesso!",
                    data: results
                })
           
        }else{
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema :(",
                    data: err
                })
        }
    })
}
 
module.exports = {
    storeUser
}