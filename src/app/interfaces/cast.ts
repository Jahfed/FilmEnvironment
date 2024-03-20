export interface Cast {
    id: number,
    castId: number,
    scriptName: string,
    actor?: string,
    agencyId?: number,
    address?: string,
    city?: string,
    phonenumbers?: string[],
    emails?: string[],
    website?: string[],
}

export interface Extras {
    id: number,
    description?: string,
    firstname: string,
    lastname: string,
    phonenumbers: string[],
    emails: string[],
    bsn?: string,
    address: string,
    city: string,
    filmdays?: number[]
}
