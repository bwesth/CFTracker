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