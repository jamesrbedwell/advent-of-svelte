import type { PackageList } from "$lib/day-3/package-list"

export async function load() {
        const req = await fetch("https://advent.sveltesociety.dev/data/2023/day-three.json")
        const list: PackageList = await req.json()
        const parcelList = list.map((li, i) => ({...li, id: i, isAdded: false}))

    return {
        parcelList 
    }
}
