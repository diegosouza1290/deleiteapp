export class Producao {
  public lote: string;
  public data: Date;
  public litroleite: string;



  constructor(lote: string, data: Date, litroleite: string) {
    this.lote = lote;
    this.data = data;
    this.litroleite = litroleite;
  }
}