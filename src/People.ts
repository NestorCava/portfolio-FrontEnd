export interface People {

    id?:number, //Cuando creamos podria no venir
    name:string,
    second_name:string,
    position:string,
    location:string,
    networks:string[][],
    about:string,
    experiencias:Experiencia[],
    educacion:Educacion[],
}

export interface Experiencia {
    id?:number,
    icono:string,
    empresa:string,
    cargo:string,
    fecha_inicio:string,
    fecha_fin:string,
    descripcion:string,
}

export interface Educacion{
    id?:number,
    icono:string,
    titulo:string,
    institucion:string,
    fecha_inicio:string,
    fecha_fin:string,
    mensiones:string,
}

export const PEOPLE: People ={

    id:0, //Cuando creamos podria no venir
    name:"string",
    second_name:"string",
    position:"string",
    location:"string",
    networks:[["string","string"],["string","string"]],
    about:'string',
    experiencias:[],
    educacion:[],
}