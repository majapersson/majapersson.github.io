'use strict';

const pacman = document.querySelector('.pacman');
const ghost = document.querySelector('.blinky');
const pacmanOffsets = {
  'X': 0,
  'Y': 0,
  'rotateZ': 0,
  'rotateY': 0
}
const ghostOffsets = {
  'X': 0,
  'Y': 0,
  'rotateZ': 0,
  'rotateY': 0
}
// let offsetX = 0;
// let offsetY = 0;
// let rotateZ = 0;
// let rotateY = 0;
const speed = 10;

window.addEventListener('keydown', controlKeys);

function controlKeys (e) {
  const pacmanKeys = [37, 38, 39, 40];
  const ghostKeys = [65, 87, 68, 83];

  if (pacmanKeys.includes(e.keyCode)) {
    controls(e, pacman, pacmanKeys, pacmanOffsets);
  } else if (ghostKeys.includes(e.keyCode)) {
    controls(e, ghost, ghostKeys, ghostOffsets);
  }
}

function controls (e, character, keys, offsetValues) {

  const key = e.keyCode;
  const xPos = character.getBoundingClientRect().x;
  const yPos = character.getBoundingClientRect().y;
  console.log(`X: ${xPos}`);
  console.log(`Y: ${yPos}`);

  // console.log(offsetX);
  // console.log(offsetY);

  switch (key) {
    case keys[0]:
      offsetX = --offsetX - speed;
      rotateZ = 0;
      rotateY = 0;
      break;
    case keys[1]:
      offsetY = --offsetY - speed;
      rotateZ = 270;
      rotateY = 180;
      break;
    case keys[2]:
      offsetX = ++offsetX + speed;
      rotateZ = 0;
      rotateY = 180;
      break;
    case keys[3]:
      offsetY = ++offsetY + speed;
      rotateZ = 270;
      rotateY = 0;
      break;
  }
  character.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotateZ}deg) rotateY(${rotateY}deg)`;
}
