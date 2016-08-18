export class Sender{
  eik: number;
  name: string;
  address: string;
  ddsNumber: number;

    constructor(eik:number,name:string,address:string,ddsNumber:number){
      this.eik = eik;
      this.name = name;
      this.address = address;
      this.ddsNumber = ddsNumber;
    }
}
