export default function uploadImages(files) {
  const formData = new FormData();
  let promise = new Promise((res3, rej) => {
    Promise.all(
      [...files].map((item) => {
        formData.append("formFile", item);
        return fetch("https://api.oqot.uz/api/1.0/file/upload", {
          method: "POST",
          headers: {
            // "Content-type": "multipart/form-data",
            // Authorization:
            //   "Bearer " +
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVzaG1hdCIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODAyNzcwNjV9.Vu-sK-UKOvy3ZTuucXbCNKn9H7dJU1xs9ekn7XXrLeY",
          },

          body: formData,
        }).then((res) => {
          return res.json();
        });
        // .then((res) => {
        //   console.log(res);
        // });

        // axios.post("https://api.oqot.uz/api/1.0/file/upload", formData);
      })
    ).then((res) => {
      res3(
        res
          .map((item) => {
            return `https://api.oqot.uz/api/1.0/file/download/${item}`;
          })
          .join(" ")
      );
    });
  });

  return promise;
}
