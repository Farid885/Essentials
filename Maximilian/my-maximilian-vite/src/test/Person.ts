// interface PersonInterface {
//   firstName: string | undefined;
//   lastName: string | undefined;
//   printFullName: () => void;
// }

export class Person {
  // implements PersonInterface
  firstName: string | undefined;
  lastName: string | undefined;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
    console.log("Class initialized!");
  }

  printFullName = () => console.log(this.firstName + " " + this.lastName);
}