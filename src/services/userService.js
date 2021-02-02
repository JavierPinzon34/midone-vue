import axios from "axios";

export default {
  async get_payment() {
    try {
      let url = process.env.VUE_APP_BASE_URI + "users/";
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  /* async send_payment(data){
        try {
            //let url='https://derco-dev.azure-api.net/boton-pago/v1/payment/';
            let url=process.env.VUE_APP_BASE_URI+'boton-pago/v1/payment/';
            const response = await axios.post(url,data,{
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            return response.data;
        }catch (e) {
            console.log(e);
            return false

        }
    },*/
};
