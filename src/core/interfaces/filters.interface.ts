export interface IFilters {
    category?: 'bicycle' | 'clothes' | 'parts' | 'accessories' | 'service',
    brand?: string,
    negotiable?: boolean,
    byDate?: 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_year'
    state?: 'new' | 'used'
    priceFrom?: number,
    priceTo?: number
}