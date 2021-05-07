export interface IProductItem {
  uuid: string
  title: string
  description: string
  discount: number
  retail_price: IRetailPrice
  original_retail_price: IRetailPrice
  cover_image_url: string
}

export interface IRetailPrice {
  value: number
  formatted_value: string
}

export interface IFetchParam {
  limit: number
  offset: number
}

export interface IBagItem {
  uuid: string
  img: string
  title: string
  price: number
}

export interface IState {
  bag: Array<IBagItem>
  wishlist: Array<string>
}
