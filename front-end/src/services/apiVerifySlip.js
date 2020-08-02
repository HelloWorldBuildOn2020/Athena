import axios from 'axios';


const APIVerifySlip = {
  verifySlip: async (slip, data) => {
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API}upload-slip?amount=${data.money}&date=${data.date}&time=${data.time}`,
      headers: {
        "Content-Type": "image/jpeg",
      },
      data: slip,
    };
    let response = axios(config).then(function (response) {
      console.log(JSON.stringify("Verify Successful."));
    }).catch(function (error) {
      console.log(error);
    });
    return response;
  }
};

export default APIVerifySlip;
