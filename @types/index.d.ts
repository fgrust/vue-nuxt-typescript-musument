export interface IProductItem {
  uuid: string
  title: string
  description: string
  discount: number
  retailPrice: IRetailPrice
  originalRetailPrice: IRetailPrice
  coverImageUrl: string
}

export interface IRetailPrice {
  value: number
  formattedValue: string
}

export interface IFetchParam {
  limit: number
  offset: number
}
