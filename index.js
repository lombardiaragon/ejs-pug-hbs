const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const Productos=[]

app.use(express.static(__dirname + '/views'))


app.set('views','./views')
app.set('view engine', 'pug')

//* En la ruta raíz me trae el formulario
app.get('/',(req,res)=>{            
    res.render('index')

})

//* En la ruta /productos me renderiza la lista
app.get('/productos',(req,res)=>{            
    res.render('productos', {productos:Productos})

})

//guardado de los productos cargados
app.post('/productos', (req,res)=>{
    const newProd= req.body
    newProd.id=Productos.length +1
    Productos.push(newProd)
    res.redirect('/')
})


app.listen(8080,()=>{
    try{
        console.log('iniciado')
    }
    catch(e){
        console.log('error de inicio')
    }
})