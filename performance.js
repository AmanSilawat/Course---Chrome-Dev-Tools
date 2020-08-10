// goto: http://localhost:3000/exercises/mark-and-measure

window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  performance.mark("start");// this
  fetch("/api")
    .then(result => result.json())
    .then(json => {
      json.images.forEach(image => console.log(image.name));
      performance.mark("end"); //this
      performance.measure("Featching image", "start", "end"); //this
      const measurements = performance.getEntriesByType("measure"); //this
      console.log(measurements); //this
    });
}