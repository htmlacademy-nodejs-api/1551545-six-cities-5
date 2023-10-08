import { HousingType } from './housing-type.enum.js';
import { Coordinates } from './coordinates.type.js';
import { User } from './user.type.js';

export type OfferType = {
  title: string;
  description: string;
  date: Date,
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
  conveniences: string[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
}
