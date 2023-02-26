export interface IGlossyCard {
	image: string;
	description: string;
	link?: string;
}

export interface IGlossyCards {
	cards: IGlossyCard[];
}
