async function fetchData(){
    const data = await fetchSomething()
    console.log(data);
}

console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );