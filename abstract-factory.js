class Developer {
  write() {
    console.log('I am writing in', this.language);
  }
}

class Manager {
  work() {
    throw new Error('virtual method');
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

class JavaManager extends Manager {
  constructor() {
    super();
  }
  work() {
    console.log('I am responsible for Java devs');
  }
}
class JsManager extends Manager {
  constructor() {
    super();
  }
  work() {
    console.log('I am responsible for Js devs');
  }
}

class EmployeeFactory {
  createDeveloper() {
    throw new Error('abstract method');
  }
  createManager() {
    throw new Error('abstract method');
  }
}
class JsFactory {
  createDeveloper() {
    return new JsDev();
  }
  createManager() {
    return new JsManager();
  }
}
class JavaFactory {
  createDeveloper() {
    return new JavaDev();
  }
  createManager() {
    return new JavaManager();
  }
}

const jsFactory = new JsFactory();

const jsDev = jsFactory.createDeveloper();

jsDev.write(); // I am writing in JavaScript

const javaFactory = new JavaFactory();

const javaManager = javaFactory.createManager();

javaManager.work(); // I am responsible for Java devs
