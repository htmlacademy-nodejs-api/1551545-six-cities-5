import { Coordinates, HousingType, User } from '../../../types/index.js';

export class CreateOfferDto {
  public userId: string;
  public title: string;
  public description: string;
  public date: Date;
  public city: string;
  public preview: string;
  public photos: string[];
  public isPremium: boolean;
  public isFavourite: boolean;
  public rating: number;
  public housingType: HousingType;
  public roomCount: number;
  public guestsCount: number;
  public rentPrice: number;
  public conveniences: string[];
  public author: User;
  public commentsCount: number;
  public coordinates: Coordinates;
}
