class Student {
  fullname: string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = `${firstname} ${middleinitial} ${lastname}`;
  }
}

interface IPerson {
  firstname: string;
  lastname: string;
}

function greeter(person: IPerson) {
  return `Hello, ${person.firstname} ${person.lastname}`;
}

const user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
