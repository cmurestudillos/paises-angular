export interface Pais {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  subregion: string;
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  cca2: string;
  cca3: string;
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string; symbol?: string } };
  area: number;
  borders?: string[];
  timezones?: string[];
}

export interface ApiResponse {
  success: boolean;
  count: number;
  data: Pais[];
}
