export default class StatsGeneratingService {
  generate() {
    const newAttack = Math.floor(Math.random() * 9 + 1);
    const newHp = Math.floor(Math.random() * 9 + 1);
    return { newAttack, newHp };
  }
}
