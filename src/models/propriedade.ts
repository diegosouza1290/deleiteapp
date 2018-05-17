export class Propriedade {
  public propriedadenome: string;
  public responsavel: string;
  public municipio: string;
  public area: string;

  constructor(propriedadenome: string, responsavel: string, municipio: string, area: string) {
    this.propriedadenome = propriedadenome;
    this.responsavel = responsavel;
    this.municipio = municipio;
    this.area = area;
  }
}