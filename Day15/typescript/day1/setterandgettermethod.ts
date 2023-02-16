class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    //gettter
    public get age() {
        return this._age;
    }
      //setter

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let person = new Person();
person.age = 10;
