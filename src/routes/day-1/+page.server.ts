import { type ChildList, db } from '$lib/day-1/child-list';
import { fail } from '@sveltejs/kit';

export async function load() {
    const list = db.list()
    if (!list.length) {
        const req = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
        const res: ChildList = await req.json()
        return {list: db.updateAll(res)}

    }
    return {
        list
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name =  data.get('name')
        const tally = data.get('tally')
        if (!name || !tally) {
            return fail(422, {
            description: data.get('description'),
            error: "Both inputs need values"
        })}
        const child = {name: name.toString(), tally: Number(tally.toString())}
        return db.add(child)
    }
}