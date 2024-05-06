export type CoordinateType = string | number;

export interface IAirQualityRecord {
  city: string;
  state: string;
  country: string;
  pollution: GivenZoneResponse["Result"]["Pollution"];
}

export interface GivenZoneResponse {
  Result: {
    Pollution: {
      ts: string;
      aqius: number;
      mainus: string;
      aqicn: number;
      maincn: string;
    };
  };
}

export interface AirQualityResponse {
  city: string;
  state: string;
  country: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  current: {
    pollution: {
      ts: string;
      aqius: number;
      mainus: string;
      aqicn: number;
      maincn: string;
    };
    weather: {
      ts: string;
      tp: number;
      pr: number;
      hu: number;
      ws: number;
      wd: number;
      ic: string;
    };
  };
}
