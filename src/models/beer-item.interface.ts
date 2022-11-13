export interface ValueAndUnit {
    value: number;
    /** e.g. "litres" */
    unit: string;
}

export interface BeerIngredient {
    name: string;
    amount: ValueAndUnit;
}

export interface BeerIngredientHop extends BeerIngredient {
    add: string;
    attribute: string;
}

export interface BeerBrewingMethod {
    mash_temp: {
        temp: ValueAndUnit;
        duration: number;
    }[];
    fermentation: {
        temp: ValueAndUnit;
    };
    twist: null;
}

/**
 * Response interface for API endpoint "https://api.punkapi.com/v2/beers".
 */
export interface BeerItemResponse {
    id: number;
    /** e.g. "Buzz" */
    name: string;
    /** e.g. "A Real Bitter Experience." */
    tagline: string;
    /** format "MM/YYYY"; e.g. "09/2007" */
    first_brewed: string;
    /** e.g. "A light; crisp and bitter IPA brewed with English and American hops. A small batch brewed only once." */
    description: string;
    /** e.g. "https://images.punkapi.com/v2/keg.png" */
    image_url: string;
    /** Alcohol By Volume: standard measurement to assess the strength of a particular beer; e.g. 4.5 */
    abv: number;
    /** International Bittering Unit: measures the bitterness levels in beer; e.g. 60 */
    ibu: number;
    target_fg: number;
    target_og: number;
    /** European Brewery Convention: refers to the color of a beer; e.g. 20 */
    ebc: number;
    /** Standard Reference Method: a system to specify beer color; e.g. 10 */
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: ValueAndUnit;
    boil_volume: ValueAndUnit;
    method: BeerBrewingMethod;
    ingredients: {
        malt: BeerIngredient[];
        hops: BeerIngredientHop[];
        yeast: string;
    };
    /** e.g. "Spicy chicken tikka masala" */
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}
