import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { Coordinates, HousingType, OfferType, User } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps implements OfferType {
  @prop({required: true, trim: true})
  public title!: string;

  @prop({required: true, trim: true})
  public description!: string;

  @prop({required: true, trim: true})
  public date!: Date;

  @prop({required: true, trim: true})
  public city!: string;

  @prop({required: true, trim: true})
  public preview!: string;

  @prop({required: true, trim: true})
  public photos!: string[];

  @prop({required: true, trim: true})
  public isPremium!: boolean;

  @prop({required: true, trim: true})
  public isFavourite!: boolean;

  @prop({required: true, trim: true})
  public rating!: number;

  @prop({required: true, trim: true})
  public housingType!: HousingType;

  @prop({required: true, trim: true})
  public roomCount!: number;

  @prop({required: true, trim: true})
  public guestsCount!: number;

  @prop({required: true, trim: true})
  public rentPrice!: number;

  @prop({required: true, trim: true})
  public conveniences!: string[];

  @prop({required: true, trim: true})
  public author!: User;

  @prop({required: true, trim: true})
  public commentsCount!: number;

  @prop({required: true, trim: true})
  public coordinates!: Coordinates;
}

export const CategoryModel = getModelForClass(OfferEntity);
