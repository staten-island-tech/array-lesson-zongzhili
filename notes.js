//get data
//promises
//show data

async function getData() {
  //returns a promise
  try {
    const response = await fetch("https://valorant-api.com/v1/agents"); //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data.data);
      //this is unique to THIS API
      data.data.forEach((agent) => console.log(agent.displayName));
      //document.querySelector("div").insertAdjacentHTML("afterbegin", `<h1>${agent.displayName}</h1>)
    }
  } catch (error) {
    alert("hey i could not find that agent");
  }
}

getData();
