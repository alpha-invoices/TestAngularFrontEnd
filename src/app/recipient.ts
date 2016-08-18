export class Recipient {
    eik: string;
    name: string;
    address: string;
    ddsNumber: string;

    constructor(eik: string, name: string, address: string, ddsNumber: string){
        this.eik = eik;
        this.name = name;
        this.address = address;
        this.ddsNumber = ddsNumber;
    }
}