import axios from 'axios';
//export const BASE_URL = "https://urgofer.herokuapp.com/api/";
export const BASE_URL = "https://api.agify.io/";

export const _axiosGetAPI1 = (url) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                url: BASE_URL + '?name='+url,
                method: 'GET',
              //  data: params,
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    reject(err);
                })

        } catch (error) {
            reject(error);
        }
    });
}