<div id="hover"><h1><a href="https://github.com/JudasBricot/Simple-Game-Engine/tree/fft-ocean">🌊 Simulating Ocean 🌊</a></h1></div>

<div>
    <img src="img/project-wvs.png" id="hover">
</div>

This project is an implementation and improvement of J. Tessendorf's paper 'Simulating Ocean'. It is built upon a simple 2D OpenGL engine that I implemented following the Hazel Engine creator's tutorials. I added some elements to be able to render in 3D.

The goal was to simulate the height of a 'part' of the ocean, which means that there is no advanced water rendering, only a flat plastic shader. The height generation is done by generating a spectrum and applying a 2D Inverse Fourier Transform. This is all done on the GPU using Compute Shaders for performance reasons.
      