/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 import { Engine } from "@babylonjs/core/Engines/engine";
 import createScene from './createScene';
 
 const canvas = document.getElementById('canvas') as HTMLCanvasElement;
 
 const engine = new Engine(canvas, true, {
   preserveDrawingBuffer: true,
   stencil: true
 }, true);
 
 // Create the scene
 const scene = createScene(engine, canvas);
 
 // Register a render loop to repeatedly render the scene
 engine.runRenderLoop(function () {
     scene.render();
 });
 
 // Watch for browser/canvas resize events
 window.addEventListener("resize", function () {
     engine.resize();
 });