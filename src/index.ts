import express from 'express'
import { formatCurrencyAOA } from './currency'
import { formatDateAO } from './date'
import { formatNumberAO } from './number'

const app = express()
const PORT = 3333

app.use(express.json())

app.post('/formatCurrency', (req, res) => {
  const { amount, position } = req.body
  const result = formatCurrencyAOA(amount, position)
  res.json({ formattedCurrency: result })
})

app.post('/formatDate', (req, res) => {
  const { date, format = 'DD/MM/YYYY', includeTime = false } = req.body
  const result = formatDateAO(new Date(date), format, includeTime)
  res.json({ formattedDate: result })
})

app.post('/formatNumber', (req, res) => {
  const { number } = req.body
  const result = formatNumberAO(number)
  res.json({ formattedNumber: result })
})

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})
