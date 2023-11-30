export interface MediaProps {
  data: ImageProps;
}

export interface ImageProps {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: ProviderMetadata3;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: Small;
  thumbnail: Thumbnail;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata2;
}

export interface ProviderMetadata2 {
  public_id: string;
  resource_type: string;
}

export interface ProviderMetadata3 {
  public_id: string;
  resource_type: string;
}
