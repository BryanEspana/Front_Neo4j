export interface Games {
    id: number;
    portada: string;
    titulo: string;
    publicacion: string,
    description?: string;
    precio: number;
    screenshots?: string[];
  }
  
  export interface publicacionInterface{
    year: number;
    month: number;
    day: number;
  }
  