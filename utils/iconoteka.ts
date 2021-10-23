import iconotekaJSON from '../iconoteka/iconoteka.json';

export const iconoteka:Iconoteka = iconotekaJSON;

export type Iconoteka = {
  name:  string;
  items: IconotekaGroup[];
}

export type IconotekaGroup = {
  name:  string;
  items: IconotekaItem[];
}

export type IconotekaItem = {
  properties: IconotekaItemProperties;
  name:       string;
  keywords:   string[];
  path:       string;
}

export type IconotekaItemProperties = {
  isFill:    boolean;
  isStroke:  boolean;
  isBold:    boolean;
  isMedium:  boolean;
  isRegular: boolean;
  isLight:   boolean;
}
