
import { writable } from 'svelte/store';

const createCookieCount = () => {
    const { subscribe, set, update } = writable([] as string[]);
    return {
        subscribe,
        increment: () => update((n) => [...n, '🍪']),
        decrement: () => update((n) => n.slice(0, -1)),
        reset: () => set([])
    };
};

export const cookieCount = createCookieCount()