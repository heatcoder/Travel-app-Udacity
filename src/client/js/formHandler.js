async function handleSubmit(event) {
    event.preventDefault()


    //calculates the number of days remaining to the trip
    let startDate = document.getElementById("startDate").valueAsNumber;
    

    //user input value
    let destination = document.getElementById('destination').value;

    let today = new Date();

    //calculating total time
    let totalDays = startDate - today.getTime();

    //length of days
    let endDate = document.getElementById("endDate").valueAsNumber;
    
    if(endDate && (startDate >= endDate)){
        alert('Return date can not be before the departure date. Please correct to proceed!');
        return false
    }  else if (!destination) {
        alert('Please enter your destination!');
    } else if(!startDate || !endDate) {
        alert('Please fill up the dates field')
    }
    
    else{
        /*for api call for geonames*/
        const geo = await fetch("http://localhost:8081/geo", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({ city: destination }),
        });
        const geoApiData = await geo.json();
        console.log('console log 3rd May',geoApiData);
       
       

        /*for api call for weatherbit*/
        const weatherRes = await fetch("http://localhost:8081/weather", {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify({ lat: geoApiData.lat, lng: geoApiData.lng, days: totalDays }),
        });
        const weatherData = await weatherRes.json();
        
        console.log('this is final data:' , weatherData);


        /*for api call for pixabay*/
        const photoRes = await fetch("http://localhost:8081/images", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify({ city: destination, countryName: geoApiData.countryName }),
        });
        const photoData = await photoRes.json();
        console.log(photoData);


        const data = [{ geoApiData }, { weatherData }, { city: destination }, { days: totalDays }, { photoData }]

        Client.innerHtml(data);
    };

};
   
export {handleSubmit};
    
