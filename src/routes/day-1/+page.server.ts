type ElfList = {
    name: string
    tally: number;
}
export async function load() {
    const req = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
    const list = await req.json()

    return {
        list: list as ElfList
    }

}