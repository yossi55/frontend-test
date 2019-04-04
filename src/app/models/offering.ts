import { OfferingLocation } from '@models/offering-location';
import { OfferingImage } from '@models/offering-image';
import { OfferingVideo } from '@models/offering-video';

export class Offering {
  id: string;
  name: string;
  slug: string;
  status: string;
  location: OfferingLocation;
  type: string;
  purchase_price: number;
  loan_to_value: number;
  categories: Array<string>;
  expected_roi: 0;
  minimum_investment: number;
  holding_period: string;
  map: string;
  description: string;
  is_coming_soon: number;
  is_waiting_list: number;
  interested_investors: number;
  available_to_invest: number;
  investment_goal: number;
  images: Array<OfferingImage>;
  videos: Array<OfferingVideo>;
}
