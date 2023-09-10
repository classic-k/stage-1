const express = require('express')
const app = express()
const port = 3000


const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday"]


app.get('/', (req, res) => {
    const slack_name = req.query['slack_name']
    const track = req.query['track']

    const dt =new Date()
const day = days[dt.getDay()]

const year = dt.getUTCFullYear()
const mn = dt.getUTCMonth()
const date = dt.getUTCDate()
const hr = dt.getUTCHours()
const min = dt.getUTCMinutes()
const sec = dt.getUTCSeconds()

const utc_time = `${year}-${mn}-${date}T${hr}:${min}:${sec}Z`
    const response = {
        slack_name: slack_name,
        current_day: day,
        utc_time,
        track,
        github_file: "",
        github_repo: "",
        status: 200
    }
  //  console.log(response)
  res.send(response)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})