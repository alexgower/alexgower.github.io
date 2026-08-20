---
layout: page
permalink: /research/
title: Research
description: Physics-based learning algorithms, from analog hardware to rugged energy landscapes.
nav: false
nav_order: 1
---

### Equilibrium Propagation on analog hardware

Equilibrium Propagation (EP) trains a physical system by letting its own dynamics settle to equilibrium, nudging the output towards the target, and reading the gradient out of the difference — no backpropagation graph required. I developed an EP learning algorithm for **Oscillator Ising Machines** (OIMs), analog networks of coupled oscillators that compute by synchronising. The approach trains both multilayer-perceptron and convolutional architectures directly in the physics of the machine, reaching state-of-the-art neuromorphic accuracy on MNIST and FashionMNIST while remaining resilient to the noise, parameter drift, and quantisation constraints of real analog hardware. A hardware implementation is in its early stages with Nokia and TU Eindhoven.

### Gradient EP and generative models

Standard EP learns by shaping energy *minima*. **Gradient Equilibrium Propagation (GradEP)** is a general mechanism I developed that extends the framework to train the energy *gradients* themselves, opening up a different class of models: those defined by vector fields rather than fixed points. It replaces EP's hard input clamp with a spring potential, so that visible units evolve too and their equilibrium displacement encodes the learned velocity — a purely quadratic modification that keeps the algorithm hardware-plausible. GradEP applies wherever the objective depends on an energy gradient: flow matching, score matching, energy-based generation.

The first application, **FlowEqProp**, is the first flow matching generative model trained with Equilibrium Propagation (Best Paper Award, ICONS '26). Because the learned energy landscape is time-independent, generation can be integrated past the training horizon: the system simply settles deeper, producing sharper samples from additional inference-time compute — which on neuromorphic hardware means nothing more than letting the physics run longer. Ongoing work combines EP with predictive coding networks and scales it to more expressive energy-based architectures, including modern Hopfield networks and energy transformers.

### Rugged energy landscapes and glassy dynamics

The third thread asks why gradient descent on rugged landscapes behaves the way it does. Using the Rubik's Cube as a model statistical-physics system, we uncovered a **saddles-to-minima topological crossover** in the connectivity of critical points: a structural transition in the landscape that controls the onset of glassy dynamics, and which is suppressed when swap moves are allowed. The Cube turns out to be a surprisingly clean laboratory for questions that matter equally for spin glasses and for optimisation in machine learning.
