import hpImg from "../assets/hp.jpg";
import lotrImg from "../assets/lotr.jpg";
import swImg from "../assets/starwars.jpg";

interface CharactersType {
  name: string;
  id: string;
  avatar: any;
}
export interface UniverseDataType {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featureImg: any;
  characters: CharactersType[];
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
        "Embark on an immersive journey as you step into the captivating world of Harry Potter, where you can engage in conversations with its beloved characters from Hogwarts.",
      featureImg: hpImg,
      characters: [
        { name: "Harry Potter", id: "1", avatar: "Avatar" },
        { name: "Hermione Granger", id: "2", avatar: "Avatar" },
        { name: "Ron Weasley", id: "3", avatar: "Avatar" },
        { name: "Lord Voldemort", id: "4", avatar: "Avatar" },
        { name: "Severus Snape", id: "5", avatar: "Avatar" },
        { name: "Dumbledore", id: "6", avatar: "Avatar" },
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
        { name: "Frodo Baggins", id: "1", avatar: "Avatar" },
        { name: "Samwise Gamgee", id: "2", avatar: "Avatar" },
        { name: "Gandalf", id: "3", avatar: "Avatar" },
        { name: "Gollum", id: "4", avatar: "Avatar" },
        { name: "Aragorn", id: "5", avatar: "Avatar" },
        { name: "Legolas", id: "6", avatar: "Avatar" },
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
        { name: "Luke Skywalker", id: "1", avatar: "Avatar" },
        { name: "Han Solo", id: "2", avatar: "Avatar" },
        { name: "Darth Vader", id: "3", avatar: "Avatar" },
        { name: "Obi-wan Kenobi", id: "4", avatar: "Avatar" },
        { name: "Princess Leila", id: "5", avatar: "Avatar" },
        { name: "Yoda", id: "6", avatar: "Avatar" },
      ],
    },
  },
];
