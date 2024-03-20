import { Time } from "@angular/common"

export interface Scenes {
    id: number,
    productionId: number,
    sceneNumber: number,
    scriptDay: number,
    scriptTime?: Time,
    locationId: number,
    castIds: number[],
    description: string,
    locationPrefix: string,
    daytime: string,
    extras: number,
    propIds: number[],
    vehicleIds: number[],
    notes: string
}

export interface Props {
    id: number,
    description: string,
    supplier?: string,
    supplierId?: number[],
    productionId: number
}

export interface Vehicles {
    id: number,
    description: string,
    licensePlate?: string,
    supplier?: string,
    supplierId?: number[],
    productionId: number
}

