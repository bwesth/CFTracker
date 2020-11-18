// This store contains all the questions and answers for the survey, including preliminary primitive values we
// will tie to each choice. Higher values are worse. In the final product these values would obviously be tied 
// to real-world statistics about carbon footprints for users in Denmark. Currently they are just used as a proof 
// of functionality.

export default {
  themes: [
    //TRANSPORT QUESTIONS//------------------------------------------------------------------------
    {
      name: "Transport: Commute",
      question: "During your daily commute, what is your main method of transport?",
      options: [
        { text: "I walk everywhere.", value: 0},
        { text: "I mainly get around by bicycle.", value: 1},
        { text: "I primarily use public transport.", value: 2},
        { text: "I like to travel by motorcycle.", value: 3},
        { text: "I mainly drive everywhere by car.", value: 4},
      ],
    },

    {
      name: "Transport: Flights",
      question: "In the last year, how many long distance (more than 2500km) return flights have you made?",
      options: [
        { text: "None.", value: 0},
        { text: "I've made exactly 1 long-distance trip.", value: 3},
        { text: "I've made between 1 and 3 long-distance trips.", value: 6},
        { text: "I've made 3 to 6 long-distance trips.", value: 9},
        { text: "I've more than 6 long-distance trips.", value: 12},
      ],
    },

    //To make the calculator accurate we would have to compare this offset value vs. their previous choice somehow.
    //Currently it just adds less if you offset more.
    {
      name: "Transport: Flights",
      question: "What percentage of your flights do you offset?",
      options: [
        { text: "None.", value: 6},
        { text: "I offset around 25% of my flights", value: 4},
        { text: "I offset around 50% of my flights", value: 3},
        { text: "I offset around 75% of my flights", value: 2},
        { text: "I offset all of my flights.", value: 0},
      ],
    },

    //FOOD QUESTIONS//-----------------------------------------------------------------------------
    {
      name: "Food: Diet",
      question: "What does your diet primarily consist of?",
      options: [
        { text: "Meat every meal", value: 6},
        { text: "Meat very rarely", value: 3},
        { text: "No beef", value: 2},
        { text: "Vegetarian", value: 2},
        { text: "Vegan", value: 1},
      ],
    },

    {
      name: "Food: Waste",
      question: "Out of the food you buy, how much would you say goes to waste each month?",
      options: [
        { text: "None.", value: 0},
        { text: "10 percent.", value: 1},
        { text: "10 to 20 percent.", value: 2},
        { text: "20 to 30 percent.", value: 3},
        { text: "More than 30 percent.", value: 4},
      ],
    },

    {
      name: "Food: Sourcing",
      question: "In a typical month, how much of your food comes from local sources?",
      options: [
        { text: "None.", value: 4},
        { text: "Some of my food is locally sourced.", value: 3},
        { text: "Around half of my food is locally sourced.", value: 2},
        { text: "All of my food is locally sourced.", value: 1},
        { text: "All of my food is locally sourced, and organic too!", value: 0},
      ],
    },

    //GOODS QUESTIONS//----------------------------------------------------------------------------
    {
      name: "Goods: Electronics",
      question: "In a typical month, how much do you spend on new electronics and applicances?",
      options: [
        { text: "I almost never buy new electronics", value: 0},
        { text: "I spend between 0 and 500kr.", value: 1},
        { text: "I spend between 500 and 1500kr.", value: 2},
        { text: "I spend bewtween 1500kr and 5000kr.", value: 3},
        { text: "I spend more than 5000kr.", value: 4},
      ],
    },

    {
      name: "Goods: Clothing",
      question: "In a typical month, how much do you spend on new clothing?",
      options: [
        { text: "I buy second hand.", value: 0},
        { text: "I spend between 0 and 500kr.", value: 1},
        { text: "I spend between 500 and 1500kr.", value: 2},
        { text: "I spend bewtween 1500kr and 5000kr.", value: 3},
        { text: "I spend more than 5000kr.", value: 4},
      ],
    },

    {
      name: "Goods: Pets",
      question: "In a typical month, how much do you spend on pets and pet goods?",
      options: [
        { text: "I don't have a pet.", value: 0},
        { text: "I spend between 0 and 500kr.", value: 1},
        { text: "I spend between 500 and 1500kr.", value: 2},
        { text: "I spend bewtween 1500kr and 5000kr.", value: 3},
        { text: "I spend more than 5000kr.", value: 4},
      ],
    },

    //HOUSEHOLD QUESTIONS//------------------------------------------------------------------------
    {
      name: "Household: Size",
      question: "How many bedrooms does your house have?",
      options: [
        { text: "1 bedroom.", value: 1},
        { text: "2 bedrooms.", value: 2},
        { text: "3 bedrooms.", value: 3},
        { text: "4 bedrooms.", value: 4},
        { text: "5 or more bedrooms.", value: 5},
      ],
    },

    {
      name: "Household: Heating",
      question: "How do you usually heat your home?",
      options: [
        { text: "Gas.", value: 4},
        { text: "Oil.", value: 4},
        { text: "Electrical.", value: 2},
        { text: "Wood.", value: 2},
        { text: "Other.", value: 2},
      ],
    },

    {
      name: "Household: People",
      question: "How many people (aged 17 and above) live in your home?",
      options: [
        { text: "I live alone.", value: 1},
        { text: "There are 2 people in my household.", value: 2},
        { text: "There are 3 people in my household.", value: 3},
        { text: "There are 4 people in my household.", value: 4},
        { text: "There are 5 or more people in my household.", value: 6},
      ],
    },

  ],
};
//END OF LINE//------------------------------------------------------------------------------------


//Below are the questions an answers used in the WWF climate survey, which is an excellent model to follow for the question format.

//WWF QUESTIONS AND ANSWERS

//FOOD
// How would you best describe your diet? Meat every meal, meat some meals, meat very rarely, no beef, vegetarian, vegan
// How much food do you waste? 0, 10, 20, 30, 30+
// How often do you buy locally produced food? A lot/Some/Don't care
// How much do you spend on take out 0 pounds, 1-10, 10-50, 50+

//TRANSPORT
//What kind of vehicle do you travel in most often as a driver or passenger? Car, Motorbike, Public Transport, Cycle, Walk
//How many hours per week do you spend on trains for personal use including commuting? None, 2hrs, 2-5, 5-15, 15-25, 25+
//Same as above but bus, dont, 1hr, 1-3, 3-6, 6-10, 10+
//In the last year how many return flights have you made to the following regions? Domestic, up to 1250, up to 2500, up to 5500, up to 9000, up to 17500
//What percentage of your flights do you offset? None, 25, 50, 75, 100

//HOUSING
//What kind of house do you live in? detached, semi detached, terrace, flat
//How many bedrooms does your house have? 1, 2, 3, 4 or more
//How many people live in your house (17 and over)? 1, 2, 3, 4, 5 or more
//How do you usually heat your home? Gas, Oil, Electricity, Wood
//Is your electricity on a green tariff? I don't know, no, yes but less than 100%, yes 100%
//Do you regularly turn off your lights and appliances? Yes, no
//How warn do you keep your home in the winter? below 14, 14-17, 18-21, over 21
//Any energey efficient improvements? energy saving lightbulds, loft insulation, etc

//GOODS
//In the past 12 months, have you bought any of these new household items? TV, laptop or PC/Large item of furniture/washin machine..blah blah
//In a typical month how much do you spend on clothes and footwear? 0, 1-50, 50-150, 150+
//In a month, how much on pets and pet food? none, 0-10, 10-30, 30+
//How much do you spend on health, beauty and grooming products? 0-10/10-50/50+
//How much do you spend on phone, internet and TV? 0, 1-130, 30-60, 60+
//Which types of waste do you recycle or compost? Food/Paper/Plastic/Tin Cans/Glass

//LOADS of questions