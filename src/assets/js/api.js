import axios from 'axios'
const baseUrl = "https://tonic-url-shortener-node.herokuapp.com"

export const CreateShortUrl = async (url) => {
    try {
        let res = await axios.post(`${baseUrl}/`, {
            url: url
        })
        if (res.status == 200) {
            // test for status you want, etc
            // console.log(res.status)
        }
        // Don't forget to return something   
        return res.data
    } catch (err) {
    }
}