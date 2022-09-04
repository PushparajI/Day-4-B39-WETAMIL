// for making  http API call
// Step 1
// Create obj which is capable of making and API call

const request = new XMLHttpRequest();

// step 2
// Open an connection 
request.open('GET', 'https://restcountries.com/v3.1/all');

// Step 3
// send a request to the destination
request.send(null);

// step 3.1
// Function to process the response

request.onload = function () {
    console.log(request.responseText);
    const countries = JSON.parse(request.responseText);
    console.log(countries);

    // for ( var country of countries) {
    //     const { flag, name: { common },  } = country;
    //     console.log(flag); 
    // }

    // or

    for (var i = 0; i < countries.length; i++) {
        const { flag, name: { common }, region, subregion, population
    } = countries[i];
        console.log(flag, common, region, subregion, population
            );
    }
}
