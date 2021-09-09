# pcisph-wasm
![Build](https://github.com/cerrno/pcisph-wasm/actions/workflows/main.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/09a7b67d-f1cb-44e3-b651-ee2dd0fb90ce/deploy-status)](https://app.netlify.com/sites/pcisph-wasm/deploys)

2D Predictive-Corrective Smoothed Particle Hydrodynamics (SPH) implementation in Rust with WASM + WebGL

Reimplementation of my [previous Rust PCISPH](https://github.com/cerrno/pcisph-rs) repository now including a WASM thread parallel solver using [wasm-bindgen-rayon](https://github.com/GoogleChromeLabs/wasm-bindgen-rayon)

For further information, see SPH tutorials on [my website](https://lucasschuermann.com/writing), including an introduction to [SPH math](https://lucasschuermann.com/writing/particle-based-fluid-simulation) and a [simple SPH solver](https://lucasschuermann.com/writing/implementing-sph-in-2d).

## Demo
Since Github Pages does not support setting HTTP headers, this project is deployed on Netlify after building with Github Actions.

[Link to demo](https://pcisph-wasm.netlify.app)

## Usage
Install dependencies
```
npm install
rustup install nightly
```

Compile WASM, run webpack, and spawn a local server (note you might need to download additional rust-src, etc. with rustup)
```
npm run serve
```
Then visit `http://localhost:8080`

## Note
This solver is not exactly PCISPH, but can be viewed as 1-iteration of SPH relaxation plus sub-stepping. The “prediction-relaxation” scheme of my implementation actually comes mainly from the (much easier to follow) paper ["Particle-based Viscoelastic Fluid Simulation”](https://dl.acm.org/doi/10.1145/1073368.1073400), as opposed to ["Predictive-Corrective Incompressible SPH”](https://dl.acm.org/doi/10.1145/1576246.1531346).
