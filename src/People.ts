export interface People {

    id?:number, //Cuando creamos podria no venir
    name:string,
    second_name:string,
    position:string,
    location:string,
    networks:string[][],
    about:string,
    experiencias:string[][],
    educacion:string[],
}

export const PEOPLE: People ={

    id:0, //Cuando creamos podria no venir
    name:"string",
    second_name:"string",
    position:"string",
    location:"string",
    networks:[["string","string"],["string","string"]],
    about:'string',
    experiencias:[["string","string"],["string","string"]],
    educacion:['string'],
}