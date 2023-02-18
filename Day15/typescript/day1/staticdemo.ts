class Employee {
    //static
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
}

//static
class Employee1 {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee1.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}