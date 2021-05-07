import { IBagItem, IState } from '~/@types'

export const state = (): IState => ({
  bag: [],
  wishlist: [],
})

export const mutations = {
  addToBag(state: IState, payload: IBagItem) {
    state.bag.push(payload)
  },

  removeFromBag(state: IState, payload: IBagItem) {
    state.bag = state.bag.filter((item) => item.uuid !== payload.uuid)
  },

  addToWishlist(state: IState, payload: string) {
    state.wishlist.push(payload)
  },

  removeFromWishlist(state: IState, payload: string) {
    state.wishlist = state.wishlist.filter((item) => item !== payload)
  },
}

export const getters = {
  bag: (state: IState) => state.bag,

  priceInBag: (state: IState) =>
    state.bag.reduce((s, item) => s + item.price, 0),

  isInWishlist: (state: IState) => (uuid: string) =>
    state.wishlist.includes(uuid),

  isInBag: (state: IState) => (uuid: string) =>
    state.bag.some((item) => item.uuid === uuid),

  countBag: (state: IState) => state.bag.length,

  countWishlist: (state: IState) => state.wishlist.length,
}
