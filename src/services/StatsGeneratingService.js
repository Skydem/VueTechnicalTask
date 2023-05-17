export default class StatsGeneratingService {
  generate() {
    const newAttack = Math.floor(Math.random() * 10);
    const newHp = Math.floor(Math.random() * 10);
    return { newAttack, newHp };
  }
}
