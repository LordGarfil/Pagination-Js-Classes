const URI = "https://rickandmortyapi.com/api/character";

export function get() {
  return new Promise(function (resolve, reject) {
    fetch(URI)
      .then((req) => req.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

