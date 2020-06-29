import Router from "express-promise-router"
import {weather} from "./openweather"

export const forecastRouter = Router();

forecastRouter.get('/api/weather/:city', async (req, res) => {
    try {
        if (req.params && req.params.city && typeof req.params.city === "string") {
            const city = req.params.city
            const w = await weather(city);
            res.json(w);
        } else {
            res.status(401).send("city parameter not on request")
        }

    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
 })

