/**
 * class student is having various properties are as follows
 * @param name
 * @param age
 * @param rank
 * @param country
 * 
 */

class Student{
    constructor(name,age,rank,country,street,city,pincode,state){
        this.name=name;
        this.age=age;
        this.rank=rank;
        this.country=country;
        this.street=street;
        this.city=city;
        this.pincode=pincode;
        this.state=state;
    }

    display(){

        console.log("Student Details :");
        console.log("Student name = ",this.name);
        console.log("Student age = ",this.age);
        console.log("Student Rank = ",this.rank);
        console.log("Student Country = ",this.country);
        console.log("Student Street = ",this.street);
        console.log("Student City = ",this.country);
        console.log("Student Pincode = ",this.pincode);
        console.log("Student State = ",this.state);
    }
}

// creating student class object
let studObj = new Student("Mahadev",22,1,"india","karve road","pune",411014,"Maharashtra");
studObj.display();