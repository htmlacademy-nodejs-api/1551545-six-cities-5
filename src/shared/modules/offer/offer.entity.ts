import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { HousingType } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({required: true, trim: true})
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public date!: Date;

  @prop()
  public preview!: string;

  @prop({required: false})// temporary not required
  public price!: number;

  @prop({
    type: () => String,
    enum: HousingType
  })
  public type!: HousingType;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  public isPremium!: boolean;
}

export const OfferModel = getModelForClass(OfferEntity);
