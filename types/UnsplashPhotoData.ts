export interface UnsplashPhotoData {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: ExifData;
  location: LocationData;
  current_user_collections: CollectionData[];
  urls: UrlsData;
  links: LinksData;
  user: UserData;
}

export interface ExifData {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface LocationData {
  name: string;
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

export interface CollectionData {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null | string;
  user: null;
}

export interface UrlsData {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface LinksData {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface UserData {
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  for_hire: boolean;
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}
