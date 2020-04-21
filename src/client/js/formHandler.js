function handleSubmit(event) {
    event.preventDefault()

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
        // zip={zip code},{country code}
    const apiKey = '&appid=b1e4acaf20b9ba652fd4325adbc2cac0';
    let exampleRequestUS = `${baseURL}zip=95616,us${apiKey}`;

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
        // make references for a file submitted from an API
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })

    fetch(exampleRequestUS)
        .then(alert(data.main.temp))

    // const getWeatherData = async() => {

    //     const res = await fetch(exampleRequestUS)

    //     try {
    //         const data = await res.json();
    //         console.log("Weather data for Davis, CA, received!")
    //             // console.log(data);
    //         console.log(data.main.temp)
    //         return data;
    //     } catch (error) {
    //         console.log("error", error);
    //     };
    // };

}

export { handleSubmit }