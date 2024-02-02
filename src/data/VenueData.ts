export const Data = [
  {
    id: 0,
    vendorType: "Venues",
    featured: true,
    sample: false,
    name: "Ventuno Restaurant",
    email: "events@sydneyrestaurantgroup.com.au",
    phone: "(02) 9247 4444",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Walsh Bay, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.4,
    review_count: 1271,
    min_price: 85,
    max_guests: 80, //make sure this is sitdown
    //need a max character length below
    short_description:
      "The Private Dining Room at Ventuno is spacious and versatile, complete with floor to ceiling glass windows offering ample natural light whilst boasting magnificent waterfront views of the historic Walsh Bay.\n\nAt Ventuno we pride ourselves on providing a personal approach to each event and offer restaurant quality menus and beverage packages for you and your guests to enjoy. Our dedicated event coordinators will liaise with you during the entire planning process to ensure that your event will run seamlessly.",
    img: ["ventuno1", "ventuno2", "ventuno3", "ventuno4", "ventuno5"],
    features: [
      "Ceremonies",
      "Receptions",
      "MC Services",
      "Amenities",
      "Accessible Location",
      "Outdoor",
      "Accomodation",
      "Parking",
      "Exceptional Menus",
      "Stunning Views",
    ], //limit this to [Ceremonies, Receiptions, External Catering, MC Services, Amenities, Accessible Location, Outdoor, Accomodation, Parking, Exceptional Menus, Stunning Views]
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [1, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Formal Dining",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 20,
        maxGuests: 80,
        priceStarting: 85,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Your supplied celebratory cake can be cut into canapé style slices and served on platters (there is no cakeage fee)",
          "Personalised menus printed with individual guest names to act as place cards",
          "Tea light candles for the tables",
        ],
        serviceInclusions: [],
        planningInclusions: [],
        diningInclusions: [
          "Antipasti board to share",
          "Pastas to share",
          "Mains to share",
          "Sides to share",
          "Dessert to share",
        ],
      },
      {
        title: "Package 2",
        name: "Cocktail Style",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 20,
        maxGuests: 90,
        priceStarting: 85,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Your supplied celebratory cake can be cut into canapé style slices and served on platters (there is no cakeage fee)",
          "Personalised menus printed with individual guest names to act as place cards",
          "Tea light candles for the tables",
        ],
        serviceInclusions: [],
        planningInclusions: [],
        diningInclusions: [
          "A substantial selection of 8 canapés (1.5 servings per selection per person)",
          "2 substantials (1 serving per selection per person)",
        ],
      },
    ],
  },

  {
    id: 1,
    vendorType: "Venues",
    featured: true,
    sample: false,
    name: "Ripples Chowder Bay",
    email: "chowderbay@ripplescafe.com.au",
    phone: "(02) 9960 3000",
    facebook: "https://www.facebook.com/rippleschowderbay/",
    instagram: "https://www.instagram.com/rippleschowderbay/",
    website: "https://www.rippleschowderbay.com.au/",
    location: "Mosman, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.3,
    review_count: 1168,
    min_price: 169,
    max_guests: 101, //make sure this is sitdown
    //need a max character length below
    short_description:
      "The heritage listed Ripples site, was skillfully transformed from a submarine miners’ depot into one of Sydney’s leading waterfront restaurants in 2007. Boasting a captivating blend of history and modernity, our restaurant offers a sophisticated backdrop for your special occasion.\n\nOur dedicated wedding coordinators will be on hand to guide you through the planning process, ensuring a seamless wedding reception.",
    img: [
      "rippleschowderbay01",
      "rippleschowderbay2",
      "rippleschowderbay3",
      "rippleschowderbay4",
    ],
    features: [
      "Ceremonies",
      "Receptions",
      "Amenities",
      "Accessible Location",
      "Outdoor",
      "Parking",
      "Exceptional Menus",
      "Stunning Views",
    ], //limit this to [Ceremonies, Receiptions, External Catering, MC Services, Amenities, Accessible Location, Outdoor, Accomodation, Parking, Exceptional Menus, Stunning Views]
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "Ripples Chowder Bay is located in the Sydney Harbour National Park where metered parking on Chowder Bay Road operates from 8.00am – 10.00pm.",
      },
      {
        id: 2,
        question: "Can we arrive by water taxi?",
        answer:
          "We recommend arriving by car/Uber as the Chowder Bay Wharf is currently closed for renovation. If you would like to arrive by water taxi you can do so by disembarking at nearby Clifton Gardens Wharf and walk along the beach to Ripples Chowder Bay. Please  enquire about the tides as a high tide will impact your walk.",
      },
      {
        id: 3,
        question: "Is there a venue hire fee?",
        answer:
          "Ripples Chowder Bay does not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve Ripples Chowder Bay for your event. Minimum spend requirements are available on request.",
      },
      {
        id: 4,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
      {
        id: 4,
        question: "Is there disabled access?",
        answer:
          "Please note Ripples Chowder Bay does not have disabled access.",
      },
    ], //limit this to 5
    workWith: [0, 2, 3, 4], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Seated Event",
        duration: 4.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our chefs have created a 3 course menu that allows your guests to have the luxury of selecting their dishes on the day based on your pre-selection. Package includes premium alcoholic & non-alcoholic beverage package for the event duration",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 20,
        maxGuests: 101,
        priceStarting: 169,
        venueInclusions: [
          "White linen napkins",
          "Personalised printed menus with guest names to act as place cards",
          "Mircophone",
          "Tea light candles for the tables",
        ],
        serviceInclusions: [
          "Your celebratory cake can be cut into canapé style slices and served on platters with tea and coffee (there is no cakeage fee)",
        ],
        planningInclusions: [],
        diningInclusions: [],
      },
      {
        title: "Package 2",
        name: "Cocktail Event",
        duration: 4.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Package includes premium alcoholic & non-alcoholic beverage package for the event duration",
        disclaimer:
          "Ripples Chowder Bay does not charge venue hire fees, however minimum spend requirements apply dependent on the date of the reception. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve Ripples Chowder Bay for your reception. Minimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 200,
        priceStarting: 155,
        venueInclusions: [
          "White linen napkins",
          "Personalised printed menus with guest names to act as place cards",
          "Mircophone",
          "Tea light candles for the tables",
        ],
        serviceInclusions: [
          "Your celebratory cake can be cut into canapé style slices and served on platters with tea and coffee (there is no cakeage fee)",
        ],
        planningInclusions: [],
        diningInclusions: [],
      },
    ],
  },

  {
    id: 2,
    vendorType: "Venues",
    featured: true,
    sample: false,
    name: "Ripples Little Manly",
    email: "littlemanly@ripplescafe.com.au",
    phone: "(02) 9337 7300",
    facebook: "https://www.facebook.com/rippleslittlemanly/",
    instagram: "https://www.instagram.com/rippleslittlemanly/",
    website: "https://www.rippleslittlemanly.com.au/",
    location: "Manly, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Beach", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.2,
    review_count: 219,
    min_price: 85,
    max_guests: 62, //make sure this is sitdown
    //need a max character length below
    short_description:
      "Ripples Little Manly provides the perfect backdrop for your next private event or celebration. Offering a laid back location with direct beach access and a menu highlighted by fresh local produce and Mediterranean flavours. Our dedicated event coordinators liaise with you during the entire planning process to ensure that from the time of booking, your event will run smoothly.",
    img: [
      "rippleslittlemanly1",
      "rippleslittlemanly2",
      "rippleslittlemanly3",
      "rippleslittlemanly4",
    ],
    features: [
      "Ceremonies",
      "Receptions",
      "Amenities",
      "Accessible Location",
      "Outdoor",
      "Parking",
      "Exceptional Menus",
      "Stunning Views",
    ], //limit this to [Ceremonies, Receiptions, External Catering, MC Services, Amenities, Accessible Location, Outdoor, Accomodation, Parking, Exceptional Menus, Stunning Views]
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [0, 1, 3, 4], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Classic Banquet Menu",
        duration: 4.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our chefs have created a 3 course menu that allows your guests to have the luxury of selecting their dishes on the day based on your pre-selection.",
        disclaimer:
          "Ripples Little Manly does not charge venue hire fees, however, minimum spend requirements apply. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve Ripples Little Manly for your event. Minimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 62,
        priceStarting: 85,
        venueInclusions: [
          "Linen napkins (seated style events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "Mixed marinated olives",
          "Bread & butter",
          "3 course menus designed to share",
        ],
      },
      {
        title: "Package 2",
        name: "Premium Banquet Menu",
        duration: 4.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our chefs have created a 3 course menu that allows your guests to have the luxury of selecting their dishes on the day based on your pre-selection.",
        disclaimer:
          "Ripples Little Manly does not charge venue hire fees, however, minimum spend requirements apply. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve Ripples Little Manly for your event. Minimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 62,
        priceStarting: 105,
        venueInclusions: [
          "Linen napkins (seated style events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "Mixed marinated olives",
          "Bread & butter",
          "Premium 3 course menus designed to share",
        ],
      },
      {
        title: "Package 3",
        name: "Cocktail Style Event",
        duration: 4.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our chefs have created a 3 course menu that allows your guests to have the luxury of selecting their dishes on the day based on your pre-selection.",
        disclaimer:
          "Ripples Little Manly does not charge venue hire fees, however, minimum spend requirements apply. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve Ripples Little Manly for your event. Minimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 62,
        priceStarting: 105,
        venueInclusions: [
          "Linen napkins (seated style events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "A selection of 8 canapés (1.5 servings per selection per person)",
          "2 substantials (1 serving per selection per person)",
          "Non-alcoholic beverage package for the duration of the event",
          "Your supplied celebratory cake can be cut into canapé style slices and served on platters (if this applies)",
        ],
      },
    ],
  },

  {
    id: 3,
    vendorType: "Venues",
    featured: false,
    sample: false,
    name: "The Fenwick",
    email: "reservations@thefenwick.com.au",
    phone: "(02) 9159 4700",
    facebook: "https://www.facebook.com/thefenwick/",
    instagram: "https://www.instagram.com/thefenwickbalmain/",
    website: "https://www.thefenwick.com.au/",
    location: "Balmain East, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.5,
    review_count: 1102,
    min_price: 95,
    max_guests: 50, //make sure this is sitdown
    //need a max character length below
    short_description:
      "Located on the harbour foreshore in Balmain East, The Fenwick offers a quintessential Sydney dining experience in a historical setting. With views sweeping from Barangaroo to the iconic Sydney Harbour Bridge and Luna Park, The Fenwick provides seasonal and contemporary dining.",
    img: ["fenwick01", "fenwick02", "fenwick03", "fenwick04"],
    features: [
      "Ceremonies",
      "Receptions",
      "MC Services",
      "Amenities",
      "Accessible Location",
      "Outdoor",
      "Exceptional Menus",
      "Stunning Views",
    ], //limit this to [Ceremonies, Receiptions, External Catering, MC Services, Amenities, Accessible Location, Outdoor, Accomodation, Parking, Exceptional Menus, Stunning Views]
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [1, 2, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Classic Banquet Menu",
        duration: 5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "The Fenwick does not charge venue hire fees, minimum spend requirements apply. ns you are required to spend at least the minimum spend requirement on food and s in order to reserve The Gallery for your inimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 50,
        priceStarting: 95,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "Bread & butter",
          "3 course menus designed to share",
          "Shared sides for the tables",
        ],
      },
      {
        title: "Package 2",
        name: "Premium Banquet Menu",
        duration: 5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "The Fenwick does not charge venue hire fees, minimum spend requirements apply. ns you are required to spend at least the minimum spend requirement on food and s in order to reserve The Gallery for your inimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 50,
        priceStarting: 115,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "Bread & butter",
          "3 course menu designed to share with additional choices",
          "Shared sides for the tables",
        ],
      },
      {
        title: "Package 3",
        name: "Cocktail Style Event",
        duration: 5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "The Fenwick does not charge venue hire fees, minimum spend requirements apply. ns you are required to spend at least the minimum spend requirement on food and s in order to reserve The Gallery for your inimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 50,
        priceStarting: 95,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "A substantial selection of 8 canapés (1.5 servings per selection, per person)",
          "2 substantials (1 serving per selection, per person)",
        ],
      },
    ],
  },

  {
    id: 4,
    vendorType: "Venues",
    featured: false,
    sample: false,
    name: "Sails on Lavender Bay",
    email: "info@sailslavenderbay.com",
    phone: "(02) 9955 5998",
    facebook: "https://www.facebook.com/sailslavenderbay/",
    instagram: "https://www.instagram.com/sailsonlavenderbay/",
    website: "https://www.sailslavenderbay.com/",
    location: "McMahons Point, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.4,
    review_count: 889,
    min_price: 119,
    max_guests: 100, //make sure this is sitdown
    //need a max character length below
    short_description:
      "Perched on Sydney Harbour’s edge, our restaurant offers postcard views of the Sydney Opera House framed by the Harbour Bridge, Luna Park and the tranquil, bobbing boats of Lavender Bay.\n\nSails on Lavender Bay is available for all events from birthdays and anniversaries to corporate events and wedding receptions.\n\nWe have a variety of dining options ranging from sit down meals to cocktail parties. Your event will be individually tailored to your preferences with the help of our experienced Functions Coordinator.",
    img: ["sails1", "sails02", "sails03", "sails04"],
    features: [
      "Ceremonies",
      "Receptions",
      "MC Services",
      "Amenities",
      "Accessible Location",
      "Outdoor",
      "Exceptional Menus",
      "Stunning Views",
    ], //limit this to [Ceremonies, Receiptions, External Catering, MC Services, Amenities, Accessible Location, Outdoor, Accomodation, Parking, Exceptional Menus, Stunning Views]
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [1, 2, 3, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Lunch & Dinner Menu",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant waterfront venue.",
        disclaimer:
          "Sails on Lavender Bay does not charge venue hire fees, minimum spend requirements apply. ns you are required to spend at least the minimum spend requirement on food and s in order to reserve The Gallery for your inimum spend requirements are available on request.",
        minGuests: 20,
        maxGuests: 100,
        priceStarting: 119,
        venueInclusions: [
          "Linen napkins (formal dining events)",
          "Personalised menus printed with individual guest names (to act as place cards if applicable)",
        ],
        serviceInclusions: [
          "Professional service staff on the day",
          "Your supplied celebratory cake can be cut into canapé style slices (if this applies)",
        ],
        planningInclusions: [
          "Dedicated event coordinator in the lead up to your event",
        ],
        diningInclusions: [
          "Bread & butter",
          "3 course menus designed to share",
          "Shared sides for the tables",
        ],
      },
    ],
  },
  {
    id: 5,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "O Bar & Dining",
    email: "reservations@obardining.com.au",
    phone: "(02) 9247 9777",
    facebook: "https://www.facebook.com/Obardining/",
    instagram: "https://www.instagram.com/obardining/",
    website: "https://www.obardining.com.au/",
    location: "Sydney, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Garden", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.4,
    review_count: 4373,
    min_price: 200,
    max_guests: 150,
    short_description:
      "Home to the only revolving event space in Sydney, O Bar & Dining is truly one of a kind. Located on level 47 of Sydney’s iconic Australia Square Tower, this modern fine-dining restaurant boasts panoramic 360-degree views of Sydney Harbour and the city skyline. Dedicated event coordinators, chic interiors, and exceptional food menus guarantee a truly memorable experience at this luxurious Sydney event venue.\n\nAs O Bar’s unique circular dining room slowly revolves, expansive floor-to-ceiling windows offer uninterrupted views of Sydney’s most recognisable landmarks, forming an ever-changing backdrop for your next event. Your guests will be blown away by breathtaking vistas of the Sydney Harbour Bridge and Sydney Opera House.\n\nFor intimate soirees, a private dinner in O Bar’s elegant Salon Privé is the way to go. If you need more space, the Dress Circle offers a flexible layout that can be used as a private drinks reception with a separate dining space. You can also hire the entire venue exclusively, giving you access to the Salon Privé, Dress Circle, Lounge Bar, and main dining room.\n\nThe dedicated events team at O Bar & Dining Sydney will create a bespoke floor plan for your exclusive event to ensure a seamless experience.",
    img: ["Obar1", "Obar2", "Obar3", "Obar4", "Obar5"],
    features: [
      "Ceremonies",
      "Receptions",
      "External Catering",
      "MC Services",
      "Amenities",
      "Accessible Location",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 6,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Ovolo Woolloomooloo",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Woolloomooloo, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Country", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.5,
    review_count: 1661,
    min_price: 210,
    max_guests: 350,
    short_description:
      "Offering a spectacular setting for your Sydney wedding, Ovolo Woolloomooloo is a unique heritage-listed wharf venue beautifully positioned right over Sydney Harbour. This boutique five-star hotel has everything you need for an unforgettable wedding experience under one roof, including luxurious accommodation, stunning event spaces, exceptional service from a dedicated in-house events team, and innovative fine-dining menus.\n\nFrom your very first meeting until the last drink is poured, you’ll be blown away by the dedication of Ovolo Woolloomooloo’s wonderful Wedding Specialists, who will be there every step of the way, from helping finalise menu selections to liaising with your suppliers.\n\nEvery Ovolo wedding includes room hire, service and wait staff, creative catering options, table settings, and the all-important bridal suite, so you know your wedding day at this stylish boutique hotel will feel effortless and enjoyable.",
    img: ["Ovolo1", "Ovolo2", "Ovolo3", "Ovolo4", "Ovolo5", "Ovolo6"],
    features: [
      "Ceremonies",
      "Receptions",
      "Outdoor",
      "Accomodation",
      "Parking",
      "Accessible Location",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 7,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Cruise Bar",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "The Rocks, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.0,
    review_count: 1631,
    min_price: 120,
    max_guests: 500,
    short_description:
      "Perfectly placed in the heart of Sydney’s bustling Circular Quay, Cruise Bar offers an incredible waterfront setting for your next event. Corporate functions, waterside weddings, and social celebrations enjoy an unbeatable backdrop of the harbour and Sydney Opera House at this stylish multi-level event venue.\n\nSet over three levels, Cruise Bar Sydney is home to three dynamic event spaces that play host to an array of memorable functions, from intimate gatherings to lavish celebrations. Depending on the style of your event and the length of your guest list, choose from the Rooftop space, Junk Lounge or Cruise Bar.\n\nNo matter what kind of event you’re planning, Cruise Bar’s dedicated team will curate a truly memorable experience tailored to your needs. Aside from the spectacular waterfront views, you’ll love the bespoke event packages, world-class menus, and killer cocktail lists at this trendy Sydney venue.",
    img: [
      "CruiseBar1",
      "CruiseBar2",
      "CruiseBar3",
      "CruiseBar4",
      "CruiseBar5",
      "CruiseBar6",
    ],
    features: [
      "Ceremonies",
      "Receptions",
      "Outdoor",
      "External Catering",
      "Exceptional Menus",
      "Stunning Views",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 8,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Coogee Bay Hotel",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Coogee, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.0,
    review_count: 3345,
    min_price: 105,
    max_guests: 200,
    short_description:
      "Sydneysiders expect a certain level of excellence when it comes to events in and around the CBD, and when you’re a coastal city, waterfront venues are in high demand. That’s certainly the case for Coogee Bay Hotel, which boasts a prime piece of real estate right on the beach and just 20 minutes from the city centre.\n\nThe team at Coogee Bay Hotel pride themselves on delivering an exceptional event experience for every occasion, be that a milestone birthday, a corporate function, or your dream wedding. With a venue layout that flows from room to room, your guests will be able to move through the space organically. This is particularly exciting for clients who plan to set up multiple stations such as corporate stalls, food carts and entertainers, or breakout areas to mingle and relax.\n\nThe two rooms – the Seaview Room and the Seabreeze Room – have access to a spacious balcony that looks out across the beach and the ocean. The spaces feel coastal and elegant, with floor-to-ceiling windows and light tones and furnishings inviting the sunbleached coastline into the venue’s aesthetic.\n\nThe Coogee Bay Hotel is a 4-star boutique hotel, so your guests have access to 74 beautifully appointed rooms and suites. Perfect for wedding eve and night, multi-day conferences, or out-of-towners who don’t fancy a late-night drive home, you have a choice of rooms from the boutique or Coogee Bay style.",
    img: ["Coogee1", "Coogee2", "Coogee3", "Coogee4", "Coogee5"],
    features: [
      "Ceremonies",
      "Receptions",
      "Outdoor",
      "Beachfront",
      "Parking",
      "Accomodation",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 9,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Will & Mike's",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Banksmeadow, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.6,
    review_count: 94,
    min_price: 105,
    max_guests: 200,
    short_description:
      "Will & Mike’s is a hidden gem of a wedding venue nestled in a heritage-listed garden just 15 minutes from Sydney’s bustling CBD. This unique venue boasts a fusion of Outdoor spaces, plus a picturesque backdrop of lush greenery for nature-loving couples.\n\nAlongside picture-perfect surroundings, this charming location also offers extensive catering options and a licensed bar. Will & Mike’s Sydney started with humble catering beginnings, and since 2003 this team has flourished from catering to providing venues and packages for weddings and private functions.\n\nIf you want to work with hospitality experts on your big day, this team is ready to help. With years in the industry, your wedding day will be seamless and stress-free, thanks to this experienced and dedicated hospitality team.",
    img: [
      "WillandMikes1",
      "WillandMikes2",
      "WillandMikes3",
      "WillandMikes4",
      "WillandMikes5",
    ],
    features: ["Ceremonies", "Receptions", "Outdoor", "Parking", "Catering"],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 10,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Bathers' Pavilion",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Mosman, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.3,
    review_count: 1805,
    min_price: 125,
    max_guests: 200,
    short_description:
      "Enjoying an unrivalled waterfront location overlooking Sydney’s Balmoral Beach, Bathers’ Pavilion is a relaxed and contemporary coastal venue in Mosman. This beautiful heritage building houses an array of unique spaces to suit all kinds of events, including fabulous cocktail soirees, elegant beachside weddings, birthday parties, corporate functions, and more.\n\nThe bright and airy Balmoral Room is a popular choice for private events and wedding receptions at Bathers’ Pavilion, with its neutral, contemporary colour palette and versatile interiors. Adjoining the Balmoral Room is a sprawling European-inspired terrace boasting panoramic views of Balmoral Beach. This breathtaking outdoor space has its own private bar and is the perfect spot for alfresco cocktail parties and beachside wedding ceremonies.\n\nWhether you’re planning an intimate gathering with your closest loved ones or a lavish celebration for 150+ guests, the experienced Bathers’ Pavilion events team will ensure your event comes together effortlessly. From curating a bespoke package to finalising mouthwatering menu options, they’ll be there every step of the way to answer any questions and make planning a breeze.",
    img: [
      "Bathers1",
      "Bathers2",
      "Bathers3",
      "Bathers4",
      "Bathers5",
      "Bathers6",
    ],
    features: ["Ceremonies", "Receptions", "Outdoor", "Parking", "Catering"],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 11,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Centennial Homestead",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Centennial Park, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.0,
    review_count: 1306,
    min_price: 115,
    max_guests: 1000,
    short_description:
      "Centennial Homestead is a premium Sydney venue nestled in the heart of Centennial Park. Surrounded by rolling green lawns, wooded groves, and winding lakes, the luxury venue is one of Sydney’s best-kept secrets.\n\nOffering a number of enchanting Outdoor spaces, Centennial Homestead is a colourful and memorable setting for a number of celebrations, including weddings, corporate functions, and social parties.\n\nJust moments from Sydney CBD, Centennial Homestead transports guests from the hustle and bustle of the city to a tranquil and idyllic natural setting that feels a million miles away.",
    img: [
      "CentennialHomestead1",
      "CentennialHomestead2",
      "CentennialHomestead3",
      "CentennialHomestead4",
      "CentennialHomestead5",
      "CentennialHomestead6",
    ],
    features: ["Ceremonies", "Receptions", "Outdoor", "Parking", "Catering"],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 12,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Estate Tuscany",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Pokolbin, NSW",
    city: "Pokolbin",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 3.8,
    review_count: 265,
    min_price: 85,
    max_guests: 300,
    short_description:
      "Estate Tuscany is a stunning private estate wedding venue located in the beautiful Hunter Valley. This highly sought after wedding venue has everything you need in one place, including multiple ceremony locations, an award-winning restaurant, a gorgeous alfresco courtyard, boutique onsite accommodation, and endless photo opportunities.\n\nIf you’re envisioning an unforgettable destination weekend wedding in the Hunter Valley, Estate Tuscany is a perfect choice. Drawing on over 25 years of experience curating incredible weddings, the dedicated events team at Estate Tuscany will be there every step of the way to ease your stress and assist with wedding planning. They’ll suggest local vendors, help you finalise your wedding menu choices, organise accommodation for your guests, and work closely with your suppliers to ensure your vision comes to life in the most effortless way possible.",
    img: [
      "EstateTuscany1",
      "EstateTuscany2",
      "EstateTuscany3",
      "EstateTuscany4",
      "EstateTuscany5",
      "EstateTuscany6",
    ],
    features: [
      "Ceremonies",
      "Receptions",
      "Outdoor",
      "Parking",
      "Catering",
      "Accomodation",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        faqs: [
          {
            id: 1,
            question: "Where do we park if coming by car?",
            answer:
              "We are conveniently located near secure parking stations with metered street parking at our front door.",
          },
          {
            id: 2,
            question: "Is there a venue hire fee?",
            answer:
              "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
          },
          {
            id: 3,
            question: "Are we allowed a DJ or Band?",
            answer:
              "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
          },
        ], //limit this to 5
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 13,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Chateau Elan",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Pokolbin, NSW",
    city: "Pokolbin",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.3,
    review_count: 990,
    min_price: 175,
    max_guests: 330,
    short_description:
      "Events at Chateau Elan at The Vintage evoke a sense of old-school grandeur in the heart of the Hunter Valley. The building itself is reminiscent of an exclusive mansion, and Chateau Elan is home to The Vintage, a gorgeous Greg Norman-designed golf course with members flocking to hit the greens every day.\n\nThe golf course makes Chateau Elan a highly sought after venue for social events, but for those more interested in taking photos on the green than making putts, Chateau Elan is a stunning wedding venue. Take advantage of the manicured lawns and lush gardens by erecting a marquee on the grass, or host your guests inside amongst the glamorous gold and black finishes.\n\nStay a few nights in one of the many luxury suites and rooms, including a deluxe spa suite, and enjoy a glass of wine from one of many neighbouring Hunter Valley wineries. You can enjoy a meal from either of the two onsite restaurants; casual fare from Spike Bar, or a formal feast from Legends Grill. Keen to relax? Play a few holes, or spoil yourself with a treatment at the award-winning Hunter Valley Day Spa.",
    img: [
      "ChateauAlan1",
      "ChateauAlan2",
      "ChateauAlan3",
      "ChateauAlan4",
      "ChateauAlan5",
      "ChateauAlan6",
    ],
    features: [
      "Ceremonies",
      "Receptions",
      "Outdoor",
      "Catering",
      "Accomodation",
    ],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
  {
    id: 14,
    vendorType: "Venues",
    featured: false,
    sample: true,
    name: "Olio",
    email: "arjun.p@knotify.com.au",
    phone: "0424073944",
    facebook: "https://www.facebook.com/www.ventuno.com.au/",
    instagram: "https://www.instagram.com/ventunorestaurantsydney/?hl=en",
    website: "https://www.ventuno.com.au/",
    location: "Chippendale, NSW",
    city: "Sydney",
    state: "NSW",
    category: "Waterview", //limit this to [Beach, Garden, Luxury, Country, Waterview, Winery, Other]
    rating: 4.2,
    review_count: 636,
    min_price: 78,
    max_guests: 120,
    short_description:
      "Stepping into the scene at Olio Kensington Street, you are transported to a world of captivating beauty and intimate ambience. The venue’s location in the heart of Sydney adds an air of excitement and convenience, ensuring that your guests will easily be able to join in the festivities.\n\nThe wedding spaces at Olio have been carefully designed to cater to your needs, offering a range of options to create the perfect atmosphere for your ceremony and reception. Whether you envision an intimate affair or a grand celebration, Olio’s versatile layout and modern industrial style provide endless possibilities to bring your dream wedding to life.\n\nWith its impeccable service, delectable cuisine curated by award-winning executive chef Lino Sauro, and a team dedicated to making your day truly special, Olio Kensington Street is the ultimate destination for couples who want to create lifelong memories in a chic restaurant setting that exudes romance and sophistication.",
    img: ["Olio1", "Olio2", "Olio3", "Olio4", "Olio5"],
    features: ["Ceremonies", "Receptions", "Outdoor", "Catering"],
    faqs: [
      {
        id: 1,
        question: "Where do we park if coming by car?",
        answer:
          "We are conveniently located near secure parking stations with metered street parking at our front door.",
      },
      {
        id: 2,
        question: "Is there a venue hire fee?",
        answer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
      },
      {
        id: 3,
        question: "Are we allowed a DJ or Band?",
        answer:
          "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
      },
    ], //limit this to 5
    workWith: [2, 3, 4, 5], //limit this to 4
    packages: [
      {
        title: "Package 1",
        name: "Afternoon Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        faqs: [
          {
            id: 1,
            question: "Where do we park if coming by car?",
            answer:
              "We are conveniently located near secure parking stations with metered street parking at our front door.",
          },
          {
            id: 2,
            question: "Is there a venue hire fee?",
            answer:
              "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event. This means you are required to spend at least the advised minimum spend requirement on food and beverages in order to reserve our venue.",
          },
          {
            id: 3,
            question: "Are we allowed a DJ or Band?",
            answer:
              "You are welcome to organise a band or DJ to perform during your event. Your event coordinator can provide you with our preferred suppliers list on request.",
          },
        ], //limit this to 5
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer: "This is a test disclaimer",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 2",
        name: "Winter Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "This package is only available in the winter months (June, July, August)",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
      {
        title: "Package 3",
        name: "Evening Package",
        duration: 5.5,
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        description:
          "Our package offers all the essential elements you need to celebrate your forever after, at our elegant beachside venue.",
        disclaimer:
          "We do not charge venue hire fees, however minimum spend requirements apply dependent on the date of the event.",
        minGuests: 80,
        maxGuests: 120,
        priceStarting: 200,
        venueInclusions: [
          "Luxurious and modern interiors",
          "Floor to ceiling glass windows",
          "Oak wooden glass windows",
          "Onside car parking",
          "White high gloss dancefloor",
        ],
        serviceInclusions: [
          "Professional and well presented wait staff",
          "Dedicated function and event managers",
          "Host on extrance",
        ],
        planningInclusions: [
          "Compliementary 2 hour set up prior to your event",
          "Wedding guest list templates provided",
          "Assigned and dedicated event coordinator provided",
        ],
        diningInclusions: [
          "Your selection of three canapes and welcome drinks served upon arrival",
          "Freshly baked bread rolls",
          "Two-course meal served on an alternate basis (choose entree & main or main & dessert)",
          "Choice of two sides",
        ],
      },
    ],
  },
];
