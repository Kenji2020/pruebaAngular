export interface Personajes {
    char_id: number;
    name: string;
    birthday: string;
    occupation:Ocupation[]
    img: string;
    status: string;
    nickname: string;
    appearance: number[];
    portrayed: string;
}

interface Ocupation{
    name: string;
}