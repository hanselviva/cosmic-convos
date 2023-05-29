import hpImg from "../assets/hp.jpg";
import lotrImg from "../assets/lotr.jpg";
import swImg from "../assets/starwars.jpg";
import albus from "../assets/avatars/hp/albus.png";
import harry from "../assets/avatars/hp/harry.png";
import hermione from "../assets/avatars/hp/hermione.png";
import ron from "../assets/avatars/hp/ron.png";
import snape from "../assets/avatars/hp/snape.png";
import voldemort from "../assets/avatars/hp/voldemort.png";
import aragorn from "../assets/avatars/lotr/aragorn.png";
import frodo from "../assets/avatars/lotr/frodo.png";
import gandalf from "../assets/avatars/lotr/gandalf.png";
import gollum from "../assets/avatars/lotr/gollum.png";
import legolas from "../assets/avatars/lotr/legolas.png";
import samwise from "../assets/avatars/lotr/samwise.png";
import han from "../assets/avatars/starwars/han.png";
import leia from "../assets/avatars/starwars/leia.png";
import luke from "../assets/avatars/starwars/luke.png";
import obi from "../assets/avatars/starwars/obi.png";
import vader from "../assets/avatars/starwars/vader.png";
import yoda from "../assets/avatars/starwars/yoda.png";

interface CharactersType {
  name: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        { name: "Harry Potter", id: "1", avatar: harry },
        { name: "Hermione Granger", id: "2", avatar: hermione },
        { name: "Ron Weasley", id: "3", avatar: ron },
        { name: "Dumbledore", id: "6", avatar: albus },
        { name: "Lord Voldemort", id: "4", avatar: voldemort },
        { name: "Severus Snape", id: "5", avatar: snape },
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
        { name: "Frodo Baggins", id: "1", avatar: frodo },
        { name: "Samwise Gamgee", id: "2", avatar: samwise },
        { name: "Gandalf", id: "3", avatar: gandalf },
        { name: "Gollum", id: "4", avatar: gollum },
        { name: "Aragorn", id: "5", avatar: aragorn },
        { name: "Legolas", id: "6", avatar: legolas },
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
        { name: "Luke Skywalker", id: "1", avatar: luke },
        { name: "Darth Vader", id: "3", avatar: vader },
        { name: "Princess Leia", id: "5", avatar: leia },
        { name: "Han Solo", id: "2", avatar: han },
        { name: "Yoda", id: "6", avatar: yoda },
        { name: "Obi-wan Kenobi", id: "4", avatar: obi },
      ],
    },
  },
];
