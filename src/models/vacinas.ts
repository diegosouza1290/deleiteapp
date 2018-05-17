export class Vacinas {
  public descricaovm: string;
  public data: Date;
  public dosagem: string;
  public tipo: string;


  constructor(descricaovm: string, data: Date, dosagem: string, tipo: string) {
    this.descricaovm = descricaovm;
    this.data = data;
    this.dosagem = dosagem;
    this.tipo = tipo;
  }
}