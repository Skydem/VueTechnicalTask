import Stats from "@/models/Stats";

export default class Card {
  constructor(title = '', img = '', stats = new Stats()) {
    this.title = title;
    this.img = img;
    this.stats = stats;
  }
}
