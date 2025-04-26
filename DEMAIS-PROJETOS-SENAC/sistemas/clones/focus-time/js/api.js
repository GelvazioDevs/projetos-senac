function getHeaders() {
  if (getUrlBase() == "http://localhost:3333/") {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  } else if (getUrlBase() == "https://hooks.slack.com/services/") {
    return {
      Accept: "application/json",
    }
  }

  return {
    Accept: "application/json",
  }
}

function getUrlBase() {
  // return "http://localhost:3333/"
  return "https://hooks.slack.com/services/"
}

function callApi(method, route, fn = false, body = {}) {
  const url = getUrlBase() + route

  console.log("url chamada:" + url)
  try {
    fetch(url, getParameters(method, body))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // if exists function, call this function
        if (fn) {
          // executing the function
          fn(data)
        }
      })
  } catch (error) {
    console.log("Error:" + error)
  }
}

function getParameters(method, body = {}) {
  if (method == "GET") {
    return {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: getHeaders(),
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    }
  }

  return {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: getHeaders(),
    body: JSON.stringify(body),
  }

  if (method == "POST") {
    return {
      method: method, // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: getHeaders(),
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    }
  }
}
