import * as pg from 'pg'

const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const pool = new pg.Pool({
    user: username,
    host: 'localhost',
    password: password,
    port: 5432
})

export interface Issue {
  name: string,
  email: string,
  description: string

}
export function insertIssue(issue: Issue) : Promise<pg.QueryResultRow> {
    return pool.query('INSERT INTO issue (name, email, description) VALUES ($1, $2, $3)', [issue.name, issue.email, issue.description])
}



