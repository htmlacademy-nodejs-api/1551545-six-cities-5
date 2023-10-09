import { OfferType, HousingType } from '../types/index.js';

export function createOffer(offerData: string): OfferType {
  const [
    title,
    description,
    date,
    city,
    preview,
    photos,
    isPremium,
    isFavourite,
    rating,
    housingType,
    roomCount,
    guestsCount,
    rentPrice,
    conveniences,
    name,
    email,
    avatar,
    type,
    commentsCount,
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  const author = {
    name,
    email,
    avatar,
    type
  };

  return {
    title,
    description,
    date: new Date(date),
    city,
    preview,
    photos: photos.split(','),
    isPremium: JSON.parse(isPremium),
    isFavourite: JSON.parse(isFavourite),
    rating: JSON.parse(rating),
    housingType: HousingType[housingType as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    roomCount: Number(roomCount),
    guestsCount: Number(guestsCount),
    rentPrice: Number(rentPrice),
    conveniences: conveniences.split(','),
    author,
    commentsCount: Number(commentsCount),
    coordinates: {
      latitude: coordinates.split(';')
        .map((item) => Number(item))[0],
      longitude: coordinates.split(';')
        .map((item) => Number(item))[1]
    }
  };
}
