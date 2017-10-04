
class API {
  makeQuery(query, type="GET") {
    return new Promise((resolve, reject) => {
      fetch(query, { method: type })
        .then(response => response.json())
        .then((json) => {
          resolve(json);
        }).catch((error) => {
          reject(error);
        });
    });
    // return new Promise((resolve, reject) => {
    //   const request = new XMLHttpRequest();
    //   request.onreadystatechange = function () {
    //     if (this.status === 200) {
    //       // console.log(request.responseText);
    //       resolve(request.responseText);
    //     } else {
    //       reject(this.responseText);
    //     }
    //   };

    //   request.open(type, query, true);
    //   request.send();
    // });
  }
}

export default new API();
