//this application is only setup to send json
//only building api to server information
//we creatd on html file to tell the users how to use the API

const { application } = require('express')
const express = require('express')
const app = express() //app can use all methods used by express
const cors = require('cors')
const PORT = 8000


app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'

},

    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'

},

    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'

    }
}

app.get('/', (request, response) => {  //looks like even listener, intead of click, it's a network request
    response.sendFile(__dirname + '/index.html') //__dirname (roots) is needed to tell where to send the index.html
})

app.get('/api:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    
    if ( rappers[rapperName]){
        response.json(rappers[rapperName])
    } else{
        response.json(rappers['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, ()=>{  //setup to listen on the PORT 
    console.log(`The server is now running on port ${PORT}! Betta GO Catch It!`)
})

