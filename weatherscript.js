const key="b9XpsCA3nEVbU1ApHnvM7lPzJlZDfHAq";

const getWeather=async(id)=>{

    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    const search=`${id}?apikey=${key}`;

    const response=await fetch(base+search);
    const data= await response.json();
    return data;

}
const getCity= async(city)=>{

const base="http://dataservice.accuweather.com/locations/v1/cities/search";
const search=`?apikey=${key}&q=${city}`;

const response=await fetch(base+search);
const data= await response.json();


return data[0];

}


// getCity("manchester").then((data)=>{
    
// return  getWeather(data[0].Key)
// }).then((data)=>{console.log(data)})
//   .catch(err=>{console.log(err)});                 


                  