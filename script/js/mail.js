const formDom = document.querySelector(`form`);
const url = "https://shops.creativerafa.com/api/contact/"
formDom.addEventListener(`submit`, handleSubmit);

async function handleSubmit(event) {
    console.log('entro al handle');
  event.preventDefault();
    const form = new FormData(this);
    const data = Object.fromEntries(form.entries()); // Convertir el formulario a un objeto
const json = JSON.stringify(data); // Convertir el objeto a una cadena JSON
  const response = await fetch(url, {
      method: 'POST',
      body: form,
      headers: {
        "Content-Type": "application/json",
      },
  })
    .then((res) => console.log(res))
    .then((data) => {
        alert("Gracias!!!!");
        window.location.replace("https://www.creativerafa.com");
      console.log(data);
    })
      .catch(error => {
          alert("Ocurrió un error: " + error.message)
          console.log(error);
    })
  console.log(response);
}
