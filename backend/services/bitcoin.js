import axios from "axios"

const BITCOIN = "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1"



const getPrice = (req, res) => {

    axios.get(BITCOIN)
        .then((resp) => {
            res.status(200).send({ response: resp.data })
        })
        .catch((err) => {
            res.status(500).send({ response: err })
        })
}


export { getPrice }