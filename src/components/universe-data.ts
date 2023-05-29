import hpImg from "../assets/hp.jpg";
import lotrImg from "../assets/lotr.jpg";
import swImg from "../assets/starwars.jpg";

export interface UniverseDataType {
  title: string;
  description: string;
  featureImg: any;
  characters: string[];
}

interface Type {
  id: string;
  data: UniverseDataType;
}

export const universeData: Type[] = [
  {
    id: "hp",
    data: {
      title: "Harry Potter",
      description:
        "Immerse yourself in the magical world of Harry Potter, where you can engage in enchanting conversations with beloved characters, attend Hogwarts, and uncover the secrets of the wizarding world.",
      featureImg: hpImg,
      characters: [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Severus Snape",
        "Albus Dumbledore",
      ],
    },
  },
  {
    id: "lotr",
    data: {
      title: "Lord of the Rings",
      description:
        "Embark on an epic journey through Middle-earth, interacting with iconic characters, exploring breathtaking landscapes, and experiencing the rich lore of this fantastical universe.",
      featureImg: lotrImg,
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Gandalf",
        "Gollum",
        "Aragorn",
        "Legolas",
      ],
    },
  },
  {
    id: "starwars",
    data: {
      title: "Star Wars",
      description:
        "Enter the expansive Star Wars universe, where you can engage in intergalactic conversations, align with the light or dark side of the Force, and shape the destiny of a galaxy torn by epic conflicts and captivating characters.",
      featureImg: swImg,
      characters: [
        "Luke Skywalker",
        "Han Solo",
        "Darth Vader",
        "Obi-wan Kenobi",
        "Princess Leila",
        "Yoda",
      ],
    },
  },
];
