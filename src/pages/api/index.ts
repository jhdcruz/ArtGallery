import { ArtObject, SliderObject } from "../../interfaces";
import emotion from "../../assets/gallery/emotion.png";
import fantasy from "../../assets/gallery/fantasy.jpg";
import op from "../../assets/gallery/op.png";
import poem from "../../assets/gallery/poem.png";

// Assembly
import a3d1 from "../../assets/gallery/assembly/1.jpg";
import a3d2 from "../../assets/gallery/assembly/2.jpg";
import a3d3 from "../../assets/gallery/assembly/3.jpg";
import a3d4 from "../../assets/gallery/assembly/4.jpg";
import a3d5 from "../../assets/gallery/assembly/5.jpg";
import a3d6 from "../../assets/gallery/assembly/6.jpg";
import a3d7 from "../../assets/gallery/assembly/7.jpg";
import a3d8 from "../../assets/gallery/assembly/8.jpg";
import a3d9 from "../../assets/gallery/assembly/9.jpg";
import a3d10 from "../../assets/gallery/assembly/10.jpg";
import a3d11 from "../../assets/gallery/assembly/11.jpg";
import a3d12 from "../../assets/gallery/assembly/12.jpg";
import a3d13 from "../../assets/gallery/assembly/13.jpg";
import a3d14 from "../../assets/gallery/assembly/14.jpg";
import a3d15 from "../../assets/gallery/assembly/15.jpg";
import a3d16 from "../../assets/gallery/assembly/16.jpg";
import a3d17 from "../../assets/gallery/assembly/17.jpg";
import a3d18 from "../../assets/gallery/assembly/18.jpg";

// Installation
import in1 from "../../assets/gallery/installation/1.jpg";
import in2 from "../../assets/gallery/installation/2.jpg";
import in3 from "../../assets/gallery/installation/3.jpg";
import in4 from "../../assets/gallery/installation/4.jpg";

export const arts: ArtObject[] = [
  {
    img: `${emotion}`,
    type: "Emotion",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${op}`,
    type: "Optical",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${fantasy}`,
    type: "Fantasy",
    title: "Title",
    desc: "Short description.",
  },
  {
    img: `${poem}`,
    type: "Poem",
    title: "Cavitenos' Life During the Pandemic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
];

export const assemblyArt: SliderObject[] = [
  {
    original: `${a3d1}`,
    thumbnail: `${a3d1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    original: `${a3d2}`,
    thumbnail: `${a3d2}`,
  },
  {
    original: `${a3d3}`,
    thumbnail: `${a3d3}`,
  },
  {
    original: `${a3d4}`,
    thumbnail: `${a3d4}`,
  },
  {
    original: `${a3d5}`,
    thumbnail: `${a3d5}`,
  },
  {
    original: `${a3d6}`,
    thumbnail: `${a3d6}`,
  },
  {
    original: `${a3d7}`,
    thumbnail: `${a3d7}`,
  },
  {
    original: `${a3d8}`,
    thumbnail: `${a3d8}`,
  },
  {
    original: `${a3d9}`,
    thumbnail: `${a3d9}`,
  },
  {
    original: `${a3d10}`,
    thumbnail: `${a3d10}`,
  },
  {
    original: `${a3d11}`,
    thumbnail: `${a3d11}`,
  },
  {
    original: `${a3d12}`,
    thumbnail: `${a3d12}`,
  },
  {
    original: `${a3d13}`,
    thumbnail: `${a3d13}`,
  },
  {
    original: `${a3d14}`,
    thumbnail: `${a3d14}`,
  },
  {
    original: `${a3d15}`,
    thumbnail: `${a3d15}`,
  },
  {
    original: `${a3d16}`,
    thumbnail: `${a3d16}`,
  },
  {
    original: `${a3d17}`,
    thumbnail: `${a3d17}`,
  },
  {
    original: `${a3d18}`,
    thumbnail: `${a3d18}`,
  },
];

export const installationArt: SliderObject[] = [
  {
    original: `${in1}`,
    thumbnail: `${in1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum mi et nibh sodales iaculis. Praesent consectetur feugiat convallis. Proin eget sagittis massa.",
  },
  {
    original: `${in2}`,
    thumbnail: `${in2}`,
  },
  {
    original: `${in3}`,
    thumbnail: `${in3}`,
  },
  {
    original: `${in4}`,
    thumbnail: `${in4}`,
  },
];
