
export type Child = {
    name: string
    tally: number;
}
export type ChildList = Child[]

let childList: ChildList = []

const orderedList = (list: ChildList) => list.sort((a,b) => b.tally - a.tally)

export const db = {
    list: () => orderedList(childList),
    updateAll: (list: ChildList) => {
        childList = list
        return orderedList(childList)
    },
    add: (child: Child) => {
        const newList = [...childList, child]
        childList = newList
    return orderedList(newList)},
}