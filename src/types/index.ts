const pages = [
  { title: "Harry Potter", key: "hp" },
  { title: "Lord of the Rings", key: "lotr" },
  { title: "Star Wars", key: "starwars" },
];

type UniverseTitle = (typeof pages)[number]["title"];
type UniverseKey = (typeof pages)[number]["key"];

export interface UniverseIdType {
  title: UniverseTitle;
  key: UniverseKey;
}
