//Constructor launches in moment of creating new User. Other methods add to User.prototype.
// Methods are behaving like methods. So you can call super inside of them.
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getRole() {
        return "User";
    }

    printUser() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


class SuperUser extends User {
    constructor(firstName, lastName) {
        //Here this doesn't exist yet.
        super(firstName, lastName);
        //Here this exist.
    }

    static getRole() {
        return "Admin";
    }

    printUser() {
        console.log(`User role: ${SuperUser.getRole()}`);
        super.printUser();
    }
}


let admin = new SuperUser("Harry", "Potter");
console.log(SuperUser.getRole());
admin.printUser();
console.log(`Full user name: ${admin.fullName}`);