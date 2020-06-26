import express from "express"
import {forecastRouter} from "./forecastrouter"

const app = express();

app.use(forecastRouter)

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
  
//weather("Swindon").then(response => console.log(response.cod))

