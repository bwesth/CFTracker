// import {
//   car,
//   train,
//   walking_biking,
//   meateater,
//   vegetarian,
//   vegan,
// } from "./intensityKilo";

export default {
  themes: [
    {
      name: "Transport - Commute",
      question: "During your daily commute, what is your main method of transport?",
      options: [
        { text: "I walk everywhere."},
        { text: "I mainly get around by bicycle."},
        { text: "I primarily use public transport."},
        { text: "I like to travel by motorcycle."},
        { text: "I mainly drive everywhere by car."},
      ],
    },

    {
      name: "Transport - Flights",
      question: "In the last year, how many long distance (more than 2500km) return flights have you made?",
      options: [
        { text: "None."},
        { text: "I offset all my flights."},
        { text: "I've made exactly 1 long-distance trip."},
        { text: "I've made between 1 and 3 long-distance trips."},
        { text: "I've made 3 or more long-distance trips."},
      ],
    },

    {
      name: "Food - Diet",
      question: "What does your diet primarily consist of?",
      options: [
        { text: "Meat every meal"},
        { text: "Meat some meals"},
        { text: "Meat very rarely"},
        { text: "No beef"},
        { text: "Vegetarian"},
        { text: "Vegan"},
      ],
    },

    {
      name: "Food - Waste",
      question: "Out of the food you buy, how much would you say goes to waste each month?",
      options: [
        { text: "None."},
        { text: "10 percent."},
        { text: "10 to 20 percent."},
        { text: "20 to 30 percent."},
        { text: "More than 30 percent."},
      ],
    },

    {
      name: "Goods - Electronics",
      question: "In a typical month, how much do you spend on new electronics and applicances?",
      options: [
        { text: "I almost never buy new electronics"},
        { text: "I spend between 0 and 500kr."},
        { text: "I spend between 500 and 1500kr."},
        { text: "I spend bewtween 1500kr and 5000kr."},
        { text: "I spend more than 5000kr."},
      ],
    },

    {
      name: "Goods - Clothing",
      question: "In a typical month, how much do you spend on new clothing?",
      options: [
        { text: "I buy second hand."},
        { text: "I spend between 0 and 500kr."},
        { text: "I spend between 500 and 1500kr."},
        { text: "I spend bewtween 1500kr and 5000kr."},
        { text: "I spend more than 5000kr."},
      ],
    },

    {
      name: "Household - Size",
      question: "How many bedrooms does your house have?",
      options: [
        { text: "1 bedroom."},
        { text: "2 bedrooms."},
        { text: "3 bedrooms."},
        { text: "4 bedrooms."},
        { text: "5 or more bedrooms."},
      ],
    },

    {
      name: "Household - Heating",
      question: "How do you usually heat your home?",
      options: [
        { text: "Gas."},
        { text: "Oil."},
        { text: "Electrical."},
        { text: "Wood."},
        { text: "Other."},
      ],
    },

  ],
};

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