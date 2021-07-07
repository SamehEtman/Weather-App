const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid=886bb38efe659c46eac3825623ae4435'

request({url : url , json: true} , (error , responce) =>{
    if (error){
        console.log('Unable to connect to the weather services!');
    }else if (responce.body.message){
        console.log(responce.body.message)
    }else{
        console.log('The Temp in out beautiful city : ' , responce.body.name)
        console.log(responce.body.main.temp)
    }
})


const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/tanta.json?access_token=pk.eyJ1Ijoic2FtZWg5OCIsImEiOiJja3F0Znd1aXowN25jMm9vMmxyaW0zajU3In0.eXJf1wSUAFHVmiiH5rTNDw&limit=1'
request({url:geoCodeURL , json:true} , (error , responce) =>{
    if (error){
        console.log('Unable to connect to location service!')
    }else if (responce.body.features.length === 0){
        console.log("Cant't find location!")
    }else{
        console.log('the lat and lon of our beloved city ' ,
        responce.body.features[0].place_name , ' : ')
        console.log('lat' , responce.body.features[0].center[0])
        console.log('lon' , responce.body.features[0].center[1])
    }
    

})