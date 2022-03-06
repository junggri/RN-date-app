export interface Address {
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  userLanguageType: string;
  query: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  userSelectedType: string;
  noSelected: string;
  hname: string;
  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;
}


export declare module Geo {

  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  export interface Location {
    lat: number;
    lng: number;
  }

  export interface Northeast {
    lat: number;
    lng: number;
  }

  export interface Southwest {
    lat: number;
    lng: number;
  }

  export interface Viewport {
    northeast: Northeast;
    southwest: Southwest;
  }

  export interface Geometry {
    location: Location;
    location_type: string;
    viewport: Viewport;
  }

  export interface PlusCode {
    compound_code: string;
    global_code: string;
  }

  export interface Result {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    plus_code: PlusCode;
    types: string[];
  }

  export interface RootObject {
    results: Result[];
    status: string;
  }

}
