const requestWrapper = (req) => {
    return req
      .then((res) => {
        if (res.status == 200) {
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
        //TODO:GLOBAL ERROR HANDLING
      });
  };
  
  export default requestWrapper;
  