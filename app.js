const request = require('request')
const geoCode = require('./utils/geoCode.js')
const foreCast = require('./utils/foreCast.js')




const address = process.argv[2]
if (!address) return console.log('Enter an adress name')

const getData = geoCode.getGeoCode(address, (error , geoCodeData) =>{
    if (error){
        return console.log(error);
    }

    foreCast.getForeCast(geoCodeData , (error , foreCastData)=>{
        if (error)
            return console.log(error)
        
        console.log('City : ' , foreCastData.name);
        console.log('Descriptrion : ' , foreCastData.descripe)
        console.log('Temperature : ' , foreCastData.temp)
    })
})












