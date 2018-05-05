class Developer {
  write() {
    console.log('I am writing in', this.language);
  }
}

class JsDev extends Developer {
  constructor() {
    super();
    this.language = 'JavaScript';
  }
}
class JavaDev extends Developer {
  constructor() {
    super();
    this.language = 'Java';
  }
}

class DeveloperFactory {
  createDeveloper(type) {
    switch (type) {
      case 'js':
        return new JsDev();
      case 'java':
        return new JavaDev();
      default:
        throw new Error('No such developer');
    }
  }
}

const factory = new DeveloperFactory();

const jsDev = factory.createDeveloper('js');

jsDev.write(); // I am writing in JavaScript
