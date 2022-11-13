import { BeerBrewingMethod, BeerIngredient, BeerIngredientHop, BeerItemResponse, ValueAndUnit } from './beer-item.interface';

/**
 * Beer items loaded from Punk API.
 */
export class BeerItem {
    /**
     * Alcohol By Volume: standard measurement to assess the strength of a particular beer;
     * e.g. 4.5
     */
    public abv: number;
    public attenuationLevel: number;
    public boilVolume: ValueAndUnit;
    public brewersTips: string;
    public contributedBy: string;
    /** e.g. "A light; crisp and bitter IPA brewed with English and American hops. A ..." */
    public description: string;
    /** European Brewery Convention: refers to the color of a beer; e.g. 20 */
    public ebc: number;
    /** format "MM/YYYY"; e.g. "09/2007" */
    public firstBrewed: string;
    /** e.g. "Spicy chicken tikka masala" */
    public foodPairing: string[];
    /** International Bittering Unit: measures the bitterness levels in beer; e.g. 60 */
    public ibu: number;
    /** e.g. "https://images.punkapi.com/v2/keg.png" */
    public imageUrl: string;
    public ingredients: {
        hops: BeerIngredientHop[];
        malt: BeerIngredient[];
        yeast: string;
    };
    public method: BeerBrewingMethod;
    /** e.g. "Buzz" */
    public name: string;
    public phValue: number;
    /** Standard Reference Method: a system to specify beer color; e.g. 10 */
    public srm: number;
    /** e.g. "A Real Bitter Experience." */
    public tagline: string;
    public targetFinalGravity: number;
    public targetOriginalGravity: number;
    public volume: ValueAndUnit;

    private _id: number;

    constructor(response: BeerItemResponse) {
        this._id = response.id;
        this.abv = response.abv;
        this.attenuationLevel = response.attenuation_level;
        this.boilVolume = response.boil_volume;
        this.brewersTips = response.brewers_tips;
        this.contributedBy = response.contributed_by;
        this.description = response.description;
        this.ebc = response.ebc;
        this.firstBrewed = response.first_brewed;
        this.foodPairing = response.food_pairing;
        this.ibu = response.ibu;
        this.imageUrl = response.image_url;
        this.ingredients = response.ingredients;
        this.firstBrewed = response.first_brewed;
        this.method = response.method;
        this.name = response.name;
        this.phValue = response.ph;
        this.srm = response.srm;
        this.tagline = response.tagline;
        this.targetFinalGravity = response.target_fg;
        this.targetOriginalGravity = response.target_og;
        this.volume = response.volume;
    }

    get id(): number {
        return this._id;
    }
}
