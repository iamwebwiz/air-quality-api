import axios from "axios";
import IQAirService from "./iqair.service";
import { AirQualityResponse } from "../air.types";

jest.mock("axios");

describe("IQAirService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch air quality data", async () => {
    const mockData = {
      data: {
        data: {
          current: {
            pollution: {
              ts: "2024-05-06T12:00:00Z",
              aqius: 50,
              mainus: "p2",
              aqicn: 20,
              maincn: "p1",
            },
          },
        },
      },
    };

    // Mock the axios.get method to return mock data
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      mockData
    );

    const service = new IQAirService(0, 0);
    const airQuality = await service.getAirQuality();

    expect(airQuality).toEqual(mockData.data.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(IQAirService.baseUrl, {
      params: {
        lat: 0,
        lon: 0,
        key: IQAirService.apiKey,
      },
    });
  });

  it("should format air quality response", () => {
    const mockData: AirQualityResponse = {
      city: "Agege",
      state: "Lagos",
      country: "Nigeria",
      location: {
        type: "Point",
        coordinates: [3.33337, 6.61563],
      },
      current: {
        pollution: {
          ts: "2024-05-05T00:00:00.000Z",
          aqius: 55,
          mainus: "p2",
          aqicn: 20,
          maincn: "p2",
        },
        weather: {
          ts: "2024-05-05T01:00:00.000Z",
          tp: 28,
          pr: 1010,
          hu: 89,
          ws: 1.03,
          wd: 0,
          ic: "02n",
        },
      },
    };

    const formattedResponse = IQAirService.getFormattedResponse(mockData);

    expect(formattedResponse).toEqual({
      Result: {
        Pollution: mockData.current.pollution,
      },
    });
  });
});
