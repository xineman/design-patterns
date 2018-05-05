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
  createDeveloper() {
    throw new Error('abstract method');
  }
}
class JsDeveloperFactory {
  createDeveloper() {
    return new JsDev();
  }
}
class JavaDeveloperFactory {
  createDeveloper() {
    return new JavaDev();
  }
}

const jsFactory = new JsDeveloperFactory();

const jsDev = jsFactory.createDeveloper();

jsDev.write(); // I am writing in JavaScript
