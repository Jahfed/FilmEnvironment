export interface Productionlist {
    id: number,
    company: string,
    contact: string,
    kvk: string,
    btw: string,
    city: string,
    country: string,
    address: string,
    phonenumbers: string[],
    emails: string[],
    socialmedias?: string[],
    web?: string,
    logo?: string
}
