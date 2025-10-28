export function createResultPanel() {
  const div = document.createElement("div");
  div.classList.add("result-panel");
  div.innerHTML = `
    <h4>Results</h4>
    <div class="result-grid">
      <div>Coordinates of A:</div><div>(436, 112)</div>
      <div>Coordinates of B:</div><div>(455, 342)</div>
      <div>Angle:</div><div>1.48°</div>
      <div>Bending status:</div><div>Straight</div>
      <div>Length:</div><div>292.41 mm</div>
    </div>
  `;
  return div;
}
