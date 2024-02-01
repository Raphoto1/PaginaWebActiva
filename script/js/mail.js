const formDom = document.querySelector(`form`);
const url = "https://shops.creativerafa.com/api/contact/";
// const url = "http://localhost:3000/api/contact";
formDom.addEventListener(`submit`, handleSubmit);

async function handleSubmit(event) {
  console.log("entro al handle");
  event.preventDefault();
  const form = new FormData(formDom);

  const response = await fetch(url, {
    mode:'no-cors',
    credentials: "include",
    method: "POST",
    body: form,
  });
  // const responseJson = await response.json();
  // console.log(responseJson.status);

  window.location.replace("https://www.creativerafa.com");
}
