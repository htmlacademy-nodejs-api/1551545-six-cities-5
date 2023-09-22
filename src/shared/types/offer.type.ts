import { HousingType } from './housing-type.enum.js';
import { Coordinates } from './coordinates.type.js';
import { Conveniences } from './conveniences-type.enum.js';

export type Offer = {
  title: string;
  description: string;
  city: string;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestsCount: number;
  rentPrice: number;
  conveniences: Conveniences;
  author: string;
  commentsCount: number;
  coordinates: Coordinates;
}
