import { Subject } from './subject';
export class SubjectList {
    subjects: Array<Subject>;

    constructor(subjects: Array<Subject>){
        this.subjects = subjects;
    }

    addSubject(newSubject: Subject) {
        this.subjects.push(newSubject);
    }

    calculateTotalPrice(): number{
        var totalPrice: number;
        totalPrice = 0;
        this.subjects.forEach(subject => {
            totalPrice += subject.priceForOne;
        });
        
        return totalPrice;
    }

}