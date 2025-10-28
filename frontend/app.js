import { createDataInput } from './components/DataInput.js';
import { createVideoPanel } from './components/VideoPanel.js';
import { createImageProcessPanel } from './components/ImageProcessPanel.js';
import { createResultPanel } from './components/ResultPanel.js';

document.getElementById("paramPanel").appendChild(createDataInput());
document.getElementById("videoPanel").appendChild(createVideoPanel());
document.getElementById("imagePanel").appendChild(createImageProcessPanel());
document.getElementById("resultPanel").appendChild(createResultPanel());
