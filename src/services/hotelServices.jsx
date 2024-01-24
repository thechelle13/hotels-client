// const url = 'https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map?arrival_date=2024-01-24&departure_date=2024-01-25&room_qty=1&guest_qty=1&bbox=34.982972%2C36.678118%2C-90.310298%2C-81.6469&search_id=none&children_age=11%2C5&price_filter_currencycode=USD&categories_filter=class%3A%3A1%2Cclass%3A%3A2%2Cclass%3A%3A3&languagecode=en-us&travel_purpose=leisure&children_qty=2&order_by=popularity';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'your_key_here',
// 		'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



// Function to construct the URL based on user input
const buildHotelSearchUrl = ({
    arrivalDate,
    departureDate,
    roomQty,
    guestQty,
    priceRange,
    bbox,
  }) => {
    const baseUrl = 'https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map';
  
    // Construct the URL with user input
    const url = `${baseUrl}?arrival_date=${arrivalDate}&departure_date=${departureDate}&room_qty=${roomQty}&guest_qty=${guestQty}&bbox=${bbox}&search_id=none&children_age=11%2C5&price_filter_currencycode=USD&categories_filter=class%3A%3A1%2Cclass%3A%3A2%2Cclass%3A%3A3&languagecode=en-us&travel_purpose=leisure&children_qty=2&order_by=popularity&price_filter_max=${priceRange}`;
    
    return url;
  };
  
  // User input
  const userInput = {
    arrivalDate: '2024-01-24',
    departureDate: '2024-01-25',
    roomQty: '1',
    guestQty: '1',
    priceRange: '1000',
    bbox: '34.982972,36.678118,-90.310298,-81.6469'
  };
  
  const url = buildHotelSearchUrl(userInput);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    },
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  