import { defaultClasses, getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';
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

  @prop({required: true})
  public date!: Date;

  @prop({required: true, trim: true})
  public city!: string;

  @prop({required: true, trim: true})
  public preview!: string;

  @prop({required: true, allowMixed: Severity.ALLOW})
  public photos!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public isFavourite!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
  public housingType!: HousingType;

  @prop({required: true})
  public roomCount!: number;

  @prop({required: true})
  public guestsCount!: number;

  @prop({required: true})
  public rentPrice!: number;

  @prop({required: true, allowMixed: Severity.ALLOW})
  public conveniences!: string[];

  @prop({required: true, allowMixed: Severity.ALLOW})
  public author!: User;

  @prop({required: true})
  public commentsCount!: number;

  @prop({required: true, allowMixed: Severity.ALLOW})
  public coordinates!: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
