export class Animal {
  public nome: string;
  public lote: string;
  public nascimento: Date;
  public raca: string;
  public categoria: string;
  public propriedade: string;

  constructor(nome: string, lote: string, nascimento: Date, raca: string, categoria?: string, propriedade?: string) {
    this.nome = nome;
    this.lote = lote;
    this.nascimento = nascimento;
    this.raca = raca;
    this.categoria = categoria;
    this.propriedade = propriedade;
  }
}