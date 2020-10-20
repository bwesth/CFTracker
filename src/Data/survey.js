import {
  car,
  train,
  walking_biking,
  meateater,
  vegetarian,
  vegan,
} from "./intensityKilo";

export default {
  themes: [
    {
      name: "Travel",
      question: "What is your main method for transport?",
      options: [
        { text: "Car", Value: car() },
        { text: "Train", Value: train() },
        { text: "Walking_biking", Value: walking_biking() },
      ],
    },
    {
      name: "Food",
      options: [
        { text: "Omnivore", Value: meateater() },
        { text: "Vegetarian", Value: vegetarian() },
        { text: "Vegan", Value: vegan() },
      ],
    },
  ],
};
