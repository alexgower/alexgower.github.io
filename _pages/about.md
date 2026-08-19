---
layout: about
title: Home
permalink: /
subtitle: PhD Student, Nokia Bell Labs & University of Cambridge
hero: true

selected_papers: true # includes a list of papers marked as "selected={true}"

announcements:
  enabled: true
  limit: 5
---

### What do I do?

<p class="lead">
Most neural networks compute by pushing neuron activations forward through a network, layer by layer. The neural networks I work on compute by <strong>falling downhill</strong> — every neuron settling into a local minimum of an overarching energy landscape <strong>at the same time</strong>. That difference matters because a physical system can do the settling for you: it is the principle behind <strong>neuromorphic hardware</strong>, brain-inspired chips that compute with physics instead of simulating it on a GPU, for a fraction of the energy.
</p>

<div class="clip-pair">
  {% include clip.liquid
     path="assets/video/feedforward.mp4"
     alt="Activations propagating forward through the layers of a neural network, one layer at a time"
     caption="Feedforward neural networks: neuron values are pushed forward, layer by layer."
     credit="©"
     credit_url="https://www.youtube.com/watch?v=aircAruvnKk" %}

  {% include clip.liquid
     path="assets/video/gradient-descent.mp4"
     alt="A ball descending a rugged three-dimensional surface into one of several local minima"
     caption="Energy-based neural networks: neuron values evolve by rolling downhill on an energy landscape into a minimum."
     credit="©"
     credit_url="https://www.youtube.com/watch?v=IHZwWFHWa-w" %}
</div>

<ul class="threads">
  <li><span class="thread-name">Algorithms</span>: I develop learning rules that train these systems without backpropagation.</li>
  <li><span class="thread-name">Hardware Applications</span>: I show how the algorithms map onto real physical devices, where the settling is done by physics rather than being simulated.</li>
  <li><span class="thread-name">Landscapes</span>: I study what determines whether a system settles somewhere useful or whether it gets stuck.</li>
</ul>


### Why do I do it?
The human brain runs on roughly 20 watts — much less than that of a toaster. Models trained in datacentres consume orders of magnitude more energy than the human brain, yet they still cannot match the generality of the brain’s intelligence. We are both wasting electricity, and missing something crucial about what makes human intelligence so efficient. By understanding this better, we can help protect the planet and uncover more about human intelligence at the same time.


### What do I *really* do?

<details class="longer" markdown="1">
<summary>The longer version</summary>

Everything I currently work on relates to **energy landscapes**: systems whose dynamics are (noisy) gradient descent to a local minimum, and the algorithms that train them. That covers energy-based and predictive coding models in machine learning; learning directly on **neuromorphic hardware**, where the settling is performed by physics rather than simulated; and the statistical physics of **slow relaxation**, which asks what properties of landscapes lets those dynamics reach a good minimum instead of getting trapped in a bad one.

My PhD, joint between the Math & Algorithms Group at **Nokia Bell Labs** and the Theoretical Condensed Matter Group at the **University of Cambridge**, centres on **Equilibrium Propagation** (EP), which computes loss gradients from a system's own equilibria instead of a backward pass. 

I first showed that **Oscillator Ising Machines** — CMOS oscillator networks originally built for combinatorial optimisation — have energy gradient descent dynamics and therefore [can be trained using EP](/publications/#gower2025oim) to state-of-the-art neuromorphic accuracy, and that [training survives realistic hardware constraints](/publications/#gower2025speedofphysics). A hardware implementation is currently in its early stages with Nokia and TU Eindhoven.

I then developed **GradEP**, a general mechanism extending EP from shaping energy *minima* to training energy *gradients*, bringing flow matching, score matching, and energy-based generation within reach of EP-compatible hardware. Its first application, [FlowEqProp](/publications/#gower2026floweqprop), is the first flow matching generative model trained by Equilibrium Propagation (Best Paper, ICONS '26). Current work combines EP with **predictive coding networks** and more expressive energy-based architectures.

The same energy landscapes turn up in statistical physics when describing slow relaxation phenomena in (typically disordered) systems such as:
- Glass (struggling to find its global minimum energy crystal configuration)
- Protein folding (struggling to find their native state)
- Optimisation problems (struggling to find their optimal solution)

Using the Rubik's Cube as a model disordered system, we found a [**saddles-to-minima topological crossover**](/publications/#gower2024rubiks) in the connectivity of critical points of the energy landscape which controls the existence and onset of glassy dynamics — a structural property of the landscape that decides whether noisy gradient descent gets stuck or finds its way to the global minimum.

</details>


### What else? 

Alongside the PhD, I was a technical project lead in applied machine learning work on risk forecasting at the **Alan Turing Institute** and **UK Ministry of Justice**.

I submit my thesis in May 2027, and will be looking for research roles in neuromorphic and/or energy-based machine learning from around then — do get in touch.
