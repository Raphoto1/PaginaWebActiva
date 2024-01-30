const formDom = document.querySelector(`form`);
const url = "https://shops.creativerafa.com/api/contact/";
formDom.addEventListener(`submit`, handleSubmit);

async function handleSubmit(event) {
  console.log("entro al handle");
  event.preventDefault();
    const form = new FormData(formDom);

    const formTest = new FormData();
    formTest.append('name', 'rafa')
    formTest.append('email', 'rafa@rafa.com')
    formTest.append('message', 'mensaje test')
  const response = await fetch(url, {
    method: "POST",
      body: formTest,

  })
    .then((res) => console.log(res))
    .then((data) => {
      alert("Gracias!!!!");
      window.location.replace("https://www.creativerafa.com");
      console.log(data);
    })
    .catch((error) => {
      alert("Ocurrió un error: " + error.message);
      console.log(error);
    });
  console.log(response);
}
