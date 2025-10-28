export function createVideoPanel() {
  const div = document.createElement("div");
  const video = document.createElement("video");
  video.width = 320;
  video.height = 240;
  video.controls = true;

  const buttons = document.createElement("div");
  buttons.innerHTML = `
    <button id="openVideoBtn">Open the video</button>
    <button>Depth Video</button>
    <button>Turn off the video</button>
    <button>Save images</button>
  `;

  // Mở video từ máy
  const openVideoBtn = buttons.querySelector("#openVideoBtn");
  openVideoBtn.onclick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        video.src = URL.createObjectURL(file);
      }
    };
    input.click();
  };

  div.append(video, buttons);
  return div;
}
