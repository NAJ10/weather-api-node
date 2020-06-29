import Router from "express-promise-router"
import {insertIssue, Issue} from './issuerepository'

export const issueRouter = Router();

issueRouter.post('/api/issue', async (req, res, next) => {
    try {
        // We need input validation here. Work out best way to do that in Node - investigate express-validator
        const issue = req.body as Issue;
        const result = await insertIssue(issue)
        res.status(204).end()
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
 })


