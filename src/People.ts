export interface Persona {

    id?:number, //Cuando creamos podria no venir
    nombre:string,
    apellido:string,
    posicion:string,
    localidad:string,
    redes:string[][],
    acerca:string,
    experiencias:Experiencia[],
    educacion:Educacion[],
    skills:Skill[],
    proyectos:Proyecto[],
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

export interface Skill{
    
    id: number,
    skill:string,
    porcentaje:number
}

export interface Proyecto{
    id: number,
    titulo:string,
    descripcion:string
}

export const PERSONA: Persona ={

    id:0, //Cuando creamos podria no venir
    nombre:"string",
    apellido:"string",
    posicion:"string",
    localidad:"string",
    redes:[["string","string"],["string","string"]],
    acerca:'string',
    experiencias:[],
    educacion:[],
    skills:[],
    proyectos:[],
}