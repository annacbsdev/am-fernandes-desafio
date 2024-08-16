type Location = {
  _lat: number;
  _long: number;
}

type Planta = {
  dorms: number;
  metragem: number;
  preco: number;
  vagas: number;
}

declare type Imovel = {
  bairro: string;
  cep: string;
  cidade: string;
  fachada: string;
  location: Location;
  nome: string;
  num: string;
  rua: string;
  planta: Planta;
}
