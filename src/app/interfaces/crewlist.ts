export interface Crewlist {
    id: number,
    firstname: string,
    lastname: string,
    birthday: string,
    function: string,
    city: string,
    country: string,
    address: string,
    phonenumbers: string[],
    emails: string[]
    socialmedias?: string[],
    website?: string,
    avatar?: string
}
