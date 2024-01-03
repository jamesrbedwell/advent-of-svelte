import { writable, type Writable } from "svelte/store";

export type Package = {name: string, weight: number}
export type PackageList = Package[]
export type Parcel = Package & {id: number, isAdded: boolean}
export type ParcelList = Parcel[]
type Trip = {
    parcels: ParcelList;
    totalWeight: number;
};

type Trips = Trip[];

export function balanceLoad(parcelList: ParcelList) {
    const sortedParcels = parcelList.sort((a, b) => b.weight - a.weight);
    const tripList = sortedParcels.reduce((prev, cur) => {
        const tripToAddTo = prev.find((trip) => trip.totalWeight + cur.weight <= 100);
        if (!tripToAddTo) {
            return [...prev, { parcels: [cur], totalWeight: cur.weight }];
        }
        tripToAddTo.parcels = [...tripToAddTo.parcels, cur];
        tripToAddTo.totalWeight += cur.weight;
        return prev;
    }, [] as Trips);
    parcels.update(p => p.map(parcel => ({...parcel, isAdded: true})))
    return trips.update(() => tripList)
}

export const trips: Writable<Trips> = writable([])

export const parcels: Writable<ParcelList> = writable([]);