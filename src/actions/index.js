import { ADDED_CARD } from './types'

export const addedCard = (id, url) => {
    return {
        type: ADDED_CARD,
        id: id,
        url: url,
    }
}