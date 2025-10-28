export function createDataInput() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h4>Parameters input</h4>
    <label>Depth of water: <input type="number" step="0.001" value="0.511"> m</label><br>
    <label>Height of camera: <input type="number" step="0.001" value="0.921"> m</label><br>
    <button id="confirmBtn">Confirm</button>
    <button id="noInputBtn">No input</button>
  `;

  div.querySelector("#confirmBtn").onclick = () => console.log("Confirm -> None");
  div.querySelector("#noInputBtn").onclick = () => console.log("No input -> None");

  return div;
}
