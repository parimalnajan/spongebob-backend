console.log("my first proper express app!") 
const express = require('express')
const path= require('path')
const e = require('express')
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


app.get('/t/:str', function(req,res){
  // res.send("You requested translation of "+ req.params.str)

  const translate = (s) => {
     const processed = s
        .split("")
        .map((x) => {
           if (x === " ") {
              x = " ";
           } else {
              x = Math.random() < 0.5 ? x : x.toUpperCase();
           }
           return x;
        })
        .join("");

     console.log("processed", processed);

     const reprocessed = processed
        .split("")
        .map((x, i, arr) => {
           const prev = arr[i - 1];
           const prev2 = arr[i - 2];

           if (prev2 && prev == prev.toUpperCase() && prev2 == prev2.toUpperCase()) {
              if (prev != " " && prev2 != " ") {
                 console.log(prev, "&", prev2, "are Uppercase");
                 x = x.toLowerCase();
              }
           }
           if (prev2 && prev == prev.toLowerCase() && prev2 == prev2.toLowerCase()) {
              if (prev != " " && prev2 != " ") {
                 console.log(prev, "&", prev2, "are Lowercase");
                 x = x.toUpperCase();
              }
           }

           return x;
        })
        .join("");

     return reprocessed;
  };
   res.json({result: translate(req.params.str)})

})
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))