import axios from "axios"

const ETHEREUM = "https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1d&limit=1"



const getPrice = (req, res) => {

    axios.get(ETHEREUM)
        .then((resp) => {
            res.status(200).send({ response: resp.data })
        })
        .catch((err) => {
            res.status(500).send({ response: err })
        })
}


export { getPrice }