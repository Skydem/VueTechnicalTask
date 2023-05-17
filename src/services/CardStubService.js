import Card from "@/models/Card";
import Stats from "@/models/Stats";

export default class CardStubService {
  generate() {
    const cards = [];
    this.generateMichaelStub(cards);
    this.generateJohnStub(cards);
    this.generateDoeStub(cards);
    return cards;
  }

  generateMichaelStub(cards) {
    const stats = new Stats(5, 4);
    const card = new Card(
      "Michael",
      "https://randomfox.ca/images/4.jpg",
      stats
    );
    cards.push(card);
  }

  generateJohnStub(cards) {
    const stats = new Stats(8, 2);
    const card = new Card(
      "John",
      "https://randomfox.ca/images/21.jpg",
      stats
    );
    cards.push(card);
  }

  generateDoeStub(cards) {
    const stats = new Stats(1, 2);
    const card = new Card(
      "Doe",
      "https://randomfox.ca/images/37.jpg",
      stats
    );
    cards.push(card);
  }
}
