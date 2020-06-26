import express from "express"
import {forecastRouter} from "./forecastrouter"
import {issueRouter} from "./issuerouter"

const app = express();

app.use(express.json());

app.use(forecastRouter);

app.use(issueRouter);

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
