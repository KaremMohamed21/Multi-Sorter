export class CharactersCollection {
  constructor(public data: string) {}

  // Define a Getter Length function
  get length(): number {
    return this.data.length;
  }

  // Define compare Function
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  // Define swap function
  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split("");
    [characters[leftIndex], characters[rightIndex]] = [characters[rightIndex], characters[leftIndex]];
    this.data = characters.join("");
  }
}
