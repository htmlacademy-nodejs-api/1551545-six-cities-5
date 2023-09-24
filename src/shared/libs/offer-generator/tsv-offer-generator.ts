import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const RATING_MIN = 1;
const RATING_MAX = 5;

const ROOM_COUNT_MIN = 1;
const ROOM_COUNT_MAX = 8;

const GUESTS_COUNT_MIN = 1;
const GUESTS_COUNT_MAX = 8;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {
  }

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = this.mockData.photos;
    const isPremium = getRandomItem<boolean>([true, false]);
    const isFavorite = getRandomItem<boolean>([true, false]);
    const rating = generateRandomValue(RATING_MIN, RATING_MAX, 1);
    const type = getRandomItem<string>(this.mockData.housingTypes);
    const roomCount = generateRandomValue(ROOM_COUNT_MIN, ROOM_COUNT_MAX);
    const guestsCount = generateRandomValue(GUESTS_COUNT_MIN, GUESTS_COUNT_MAX);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const features = getRandomItems<string>(this.mockData.features);
    const author = getRandomItem<string>(this.mockData.authors);
    const commentsCount = generateRandomValue(0, 1000); // the range of possible comments count is temporary
    const coordinates = getRandomItem<object>(this.mockData.coordinates);

    let tsvCoordinates;

    if (coordinates && 'longitude' in coordinates && 'latitude' in coordinates) {
      tsvCoordinates = `${coordinates.longitude};${coordinates.latitude}`;
    }

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    return [
      title, description, createdDate,
      city, preview, photos,
      isPremium, isFavorite, rating,
      type, roomCount, guestsCount,
      price, features, author,
      commentsCount, tsvCoordinates
    ].join('\t');
  }
}
