export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    avatar: string,
    crewId?: number,
    producerId?: number,
    productions?: number[],
    producerlevel?: boolean
}
