export interface Persona {

    id?:number, //Cuando creamos podria no venir
    nombre:string,
    apellido:string,
    banner: String,
    foto: String,
    posicion:string,
    localidad:string,
    acerca:string,
    redesSociales:RedSocial[],
    experiencias:Experiencia[],
    educacion:Educacion[],
    skills:Skill[],
    proyectos:Proyecto[],
}

export interface RedSocial {
    id?: number,
    usuario: string,
    url: string
}
export interface Experiencia {
    id?:number,
    icono:string,
    empresa:string,
    cargo:string,
    fecha_inicio:Date,
    fecha_fin:Date,
    descripcion:string,
}

export interface Educacion{
    id?:number,
    icono:string,
    titulo:string,
    institucion:string,
    fecha_inicio:Date,
    fecha_fin:Date,
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
    banner: "String",
    foto: "String",
    posicion:"string",
    localidad:"string",
    acerca:'string',
    redesSociales:[],
    experiencias:[],
    educacion:[],
    skills:[],
    proyectos:[],
}