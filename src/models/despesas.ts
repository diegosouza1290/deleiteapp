export class Despesas {
  public despesa: string;
  public data: Date;
  public descricaodp: string;
  public valor: string;

  constructor(despesa: string, data: Date, descricaodp: string, valor: string) {
    this.despesa = despesa;
    this.data = data;
    this.descricaodp = descricaodp;
    this.valor = valor;
  }
}