async function getPorconi() {
  const url = "https://baololabs.github.io/lista.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

const data = getPorconi();

console.log(getPorconi())

const porconeElement = document.getElementById("porcone");
porconeElement.innerHTML = data[Math.floor(Math.random() * data.length)];