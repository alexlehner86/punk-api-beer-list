import { BeerItemResponse } from './beer-item.interface';

/**
 * Beer items with reduced info based on the Punk API.
 */
export class BeerItem {
    /** e.g. "Buzz" */
    public name: string;
    /** e.g. "A Real Bitter Experience." */
    public tagline: string;
    /** e.g. "A light; crisp and bitter IPA brewed with English and American hops. A ..." */
    public description: string;
    /**
     * Alcohol By Volume: standard measurement to assess the strength of a particular beer;
     * e.g. 4.5
     */
    public abv: number;
    /** e.g. "Spicy chicken tikka masala" */
    public foodPairing: string[];

    private _id: number;

    constructor(response: BeerItemResponse) {
        this._id = response.id;
        this.abv = response.abv;
        this.description = response.description;
        this.foodPairing = response.food_pairing;
        this.name = response.name;
        this.tagline = response.tagline;
    }

    get id(): number {
        return this._id;
    }
}
