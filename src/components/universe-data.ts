import hpImg from "../assets/hp.jpg";
import lotrImg from "../assets/lotr.jpg";
import swImg from "../assets/starwars.jpg";

export interface UniverseDataType {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        "Embark on an immersive journey as you step into the captivating world of Harry Potter, where you can engage in conversations with its beloved characters.",
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
        "Prepare to be transported to the enchanting realm of Middle-earth, where you can converse with legendary beings and immerse yourself in the rich tapestry of Tolkien's creation.",
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
        "Enter the epic universe of Star Wars, where you can interact with iconic characters and explore the timeless battle between the light and dark sides of the Force.",
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
