export function createImageProcessPanel() {
  const div = document.createElement("div");
  const preview = document.createElement("canvas"); // dùng canvas thay vì div

  // ❌ Bỏ hai dòng sau vì chúng cố định kích thước
  // preview.style.width = "320px";
  // preview.style.height = "240px";

  // ✅ Thêm class để CSS điều khiển
  preview.classList.add("image-preview");

  const buttons = document.createElement("div");
  buttons.innerHTML = `
    <button>Contrast adjustment</button>
    <button>Image Segmentation</button>
    <button>Measurement</button>
    <button>Recovery</button>
  `;
  [...buttons.querySelectorAll("button")].forEach(btn =>
    btn.onclick = () => console.log(btn.innerText, "-> None")
  );

  div.append(preview, buttons);
  return div;
}
