class Media {
  constructor(media) {
    if (media) {
      this.name = media.name;
    }
  }
  clone() {
    throw new Error('virtual method');
  }
}

class Song extends Media {
  constructor(source) {
    super(source);
    if (source) {
      this.artist = source.artist;
      this.label = source.label;
    }
  }
  clone() {
    return new Song(this);
  }
}

class Movie extends Media {
  constructor(source) {
    super(source);
    if (source) {
      this.director = source.director;
      this.company = source.company;
    }
  }
  clone() {
    return new Movie(this);
  }
}

class MediaRegistry {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  getItem(name) {
    return this.items.find(i => i.name === name);
  }
}

const registry = new MediaRegistry();

const firstSong = new Song();
firstSong.artist = 'Drake';
firstSong.label = 'first label';
firstSong.name = `God's plan`;

registry.addItem(firstSong);

const firstMovie = new Movie();
firstMovie.name = 'Ready player one';
firstMovie.director = 'Stiven Spielberg';
firstMovie.company = 'Columbia';

registry.addItem(firstMovie);


const secondSong = registry.getItem(`God's plan`).clone();
secondSong.name = 'One dance';

registry.addItem(secondSong);

const secondMovie = registry.getItem('Ready player one').clone();
secondMovie.name = 'Back to the furture';

registry.addItem(secondMovie);

console.log(registry.items); // Two songs and two movies
