import Router from "express-promise-router"
import {insertIssue, Issue} from './issuerepository'

export const issueRouter = Router();

issueRouter.post('/issue', async (req, res, next) => {
    try {
        console.log("In the post handler")
        // We need input validation here. Work out best way to do that in Node - investigation express-validator
        const issue = req.body as Issue;
        console.log(issue)
        const result = await insertIssue(issue)
        console.log("Returned from await")
        res.status(204).end()
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
 })


