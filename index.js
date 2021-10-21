console.log("my first proper express app!") 
const express = require('express')
const path= require('path')
const app = express()
const port = 3000



app.get('/products', (req,res)=>{
  const productPage = `
  <h1>Products Page</h1>
  ${products.map((x) =>
  `<h2>${x.name}</h2>
  <h2>${x.price}</h2>
  `).join("")}    `

  res.send(productPage)
})
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/p', (req, res) => res.send('Products!'))
app.get(`/spongebob/${str}`, function(req,res){
  res.json({translation:`${str} is the result`})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))