import {weather,ForecastResponse} from './openweather'

test("a simple request", () => {
    expect.hasAssertions();
    return weather("Swansea").then(
        (data : ForecastResponse) => {
            expect(data.cod).toEqual("200")
        },
        (error : any) => {
            expect(`API call had an error: ${error}`).toEqual("")})
})