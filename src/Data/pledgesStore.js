import placeholder from "../placeholderimage.png";

//MASS Imports incoming! Surely there's a better way to do this?
import bicycle from "../Shared/Images/Pledges/bicycle.jpg"
import bus from "../Shared/Images/Pledges/bus.jpg"
import train from "../Shared/Images/Pledges/train.jpg"
import plane from "../Shared/Images/Pledges/plane.jpg"

import solar from "../Shared/Images/Pledges/solar.jpg"
import cold from "../Shared/Images/Pledges/cold.jpg"
import lightbulb from "../Shared/Images/Pledges/lightbulb.jpg"
import plug from "../Shared/Images/Pledges/plug.jpg"

import clothes from "../Shared/Images/Pledges/clothes.jpg"
import potions from "../Shared/Images/Pledges/potions.jpg"
import recycle from "../Shared/Images/Pledges/recycle.jpg"
import cellphone from "../Shared/Images/Pledges/cellphone.jpg"

import vegan from "../Shared/Images/Pledges/vegan.jpg"
import vegetarian from "../Shared/Images/Pledges/vegetarian.jpg"
import cow from "../Shared/Images/Pledges/cow.jpg"
import local from "../Shared/Images/Pledges/local.jpg"

//This holds all our Pledges! So awesome. :) These also hold dummy values for carbon offset at the moment.
//The reality is that we'd have to calculate these offsets based on user metadata. Riding a bike isn't saving C02
//if you're already walking everywhere!

export default [
  {
    //TRAVEL PLEDGES//-----------------------------------------------------------------------------
    name: "Transport",
    color: "#53AED5",
    list: [
      //CYCLICAL COMMUTE//
      {
        symbol: "🚲",
        head: "Cyclical Commute",
        body: "I will ride my bicycle to work every day.",
        tonnes: 2,
        color: "#53AED5",
        img: bicycle,
        description: `Cycling is a great healthy habit! Start cycling to work instead of driving, and you’ll save your own body as well as the planet! Keep it up for a month and you'll be healthier and happier!`,
      },
      //INFREQUENT FLIER//
      {
        symbol: "✈️",
        head: "Infrequent Flier",
        body: "I will abstain from long distance flights for a year.",
        tonnes: 6,
        color: "#53AED5",
        img: plane,
        description: `Globally, flights produced about 1.04 billion tonnes of C02 in 2018. They make up a large portion of any individual's footprint. Cutting down on your flights can have a huge impact on yours!`,
      },
      //Public Transport!
      {
        symbol: "🚄",
        head: "Train Drain",
        body: "I commute by train every day.",
        tonnes: 1,
        color: "#53AED5",
        img: train,
        description: `Using public transport saves an estimated 1.4 billion gallons of gas annually - about 14 million tonnes of C02. You can contribute to these savings by using public transport for your commutes.`,
      },
      //TODO: Something new!
      {
        symbol: "🚌",
        head: "You're the Bus",
        body: "I will commute by bus every day.",
        tonnes: 1,
        color: "#53AED5",
        img: bus,
        description: `Using public transport saves an estimated 1.4 billion gallons of gas annually - about 14 million tonnes of C02. You can contribute to these savings by using public transport for your commutes.`,
      },
    ],
  },
  {
    //HOUSEHOLD PLEDGES//--------------------------------------------------------------------------
    name: "Household",
    color: "#02C39A",
    list: [
      //SWITCH TO SOLAR//
      {
        symbol: "☀️",
        head: "Switch to Solar",
        body: "I will install solar panels on my roof.",
        tonnes: 3,
        color: "#02C39A",
        img: solar,
        description: `Choosing a clean source of energy like solar panels can eliminate the same amount of carbon emissions that would result from burning over 5,000 pounds of coal each year!`,
      },
      //TODO: Something new!
      {
        symbol: "🌡️",
        head: "Cold Can't Touch Me",
        body: "I will turn down the thermostat at home. (Wear a jersey!)",
        tonnes: 0.5,
        color: "#02C39A",
        img: cold,
        description: `Home heating and cooling is responsible for roughly 411 million tonnes of C02 annually! You can help by using good old fashioned body heat to stay warm, and drop that thermometer a few degress.`,
      },
      //TODO: Something new!
      {
        symbol: "💡",
        head: "LEDBulb Moment",
        body: "I will install LED bulbs in my home.",
        tonnes: 1,
        color: "#02C39A",
        img: lightbulb,
        description: `A good LED bulb consumes only a fraction of the energy that a regular bulb does, and they last much longer too! Save the planet and your pocketbook by replacing all your old bulbs with LEDs.`,
      },
      //TODO: Something new!
      {
        symbol: "🔌",
        head: "King of Plugs",
        body: "I will make a habit of unplugging unsused electronics.",
        tonnes: 0.3,
        color: "#02C39A",
        img: plug,
        description: `The average home has 20 energy vampires: devices that use electricity while plugged in but not in use. Save yourself some cash and reduce your emmission by unplugging devices that are not in use.`,
      },
    ],
  },

  {
    //STUFF PLEDGES//------------------------------------------------------------------------------
    name: "Goods",
    color: "#F46A67",
    list: [
      //TODO: Something new!
      {
        symbol: "👔",
        head: "Second Hand Consumer",
        body: "I will only buy second hand clothes for a year.",
        tonnes: 3,
        color: "#F46A67",
        img: clothes,
        description: `For every 600 kilos of used clothes purchased over new ones, roughly 2250 kilos of C02 emissions, 3.6 billion liters of water and 144 trees are saved! It's not only ethical to buy second hand, it's cheap!`,
      },
      //TODO: Something new!
      {
        symbol: "📵",
        head: "No Upgrades for Me",
        body: "I will not upgrade my electronics (phone, laptop, etc) this year.",
        tonnes: 1,
        color: "#F46A67",
        img: cellphone,
        description: `Due to the production and shipping costs involved in getting a new device, it has been estimated that a new phone costs as much C02 as keeping an older phone for 10 years! Stay away from upgrades for a while to help the planet.`,
      },
      //TODO: Something new!
      {
        symbol: "♻️",
        head: "Rapid Recycler",
        body: "I will start recycling my waste.",
        tonnes: 1,
        color: "#F46A67",
        img: recycle,
        description: `Using recycled materials to make new products one of the cornerstones of creating a sustainable future for our planet. Start helping now by looking up the recycling schemes in your area and following them!`,
      },
      //TODO: Something new!
      {
        symbol: "🧴",
        head: "Make it Last",
        body: "I will abstain from buying new beauty products for a month.",
        tonnes: 0.1,
        color: "#F46A67",
        img: potions,
        description: `Sourcing, manufacturing, and distribution add a secret impact to every product we buy, and beauty products are no exception! If you want to start small, try abstaining from a few products for a month. Every bit helps!`,
      },
    ],
  },

  {
    //FOOD PLEDGES//-------------------------------------------------------------------------------
    name: "Food",
    color: "#BC59B2",
    list: [
      {
        symbol: "🥬",
        head: "Going Vegan",
        body: "I will stick to a vegan diet 5 days of the week.",
        tonnes: 5,
        color: "#BC59B2",
        img: vegan,
        description: `A portion of the highest-impact vegetable products is still cheaper than most of the lowest-impact animal products. Going vegan is a great way to reduce your emissions.`,
      },
      //TODO: Something new!
      {
        symbol: "🥑",
        head: "Very Vegetarian",
        body: "I will stick to a vegetarian diet 5 days of the week.",
        tonnes: 3,
        color: "#BC59B2",
        img: vegetarian,
        description: `A portion of the highest-impact vegetable products is still cheaper than most of the lowest-impact animal products. Going vegetarian is a great way to reduce your emissions.`,
      },
      //TODO: Something new!
      {
        symbol: "🐄",
        head: "A Friend to Cows",
        body: "I will stop eating beef.",
        tonnes: 2,
        color: "#BC59B2",
        img: cow,
        description: `Up to 24% of the worlds emissions come from food production. Meat and dairy are some of the worst producers. Cut out beef and you'll be doing yourself, and the planet, a favor.`,
      },
      //TODO: Something new!
      {
        symbol: "🚜",
        head: "Stick to Local",
        body: "I will get 50% of my food from local sources.",
        tonnes: 0.5,
        color: "#BC59B2",
        img: local,
        description: `A large part of the impact of certain foods is the transport required to get them to your local supplier. Buying local saves emissions on gas and other invisible expenses such as refridgeration.`,
      },
    ],
  },
];
