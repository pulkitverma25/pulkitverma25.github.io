---
layout: project
title: Gated Updates for Value Iteration Networks
nav: projects
importance: 90
type: academic
description: Analysis of Gated Updates for Value Iteration Networks
img: /assets/img/projects/gated_vin/time_vin.png
---

Value Iteration networks (VINs) and Gated Path Planning networks (GPPNs) have successfully solved the generalized path planning problem as a reinforcement learning task of finding the optimal path in similar but modified environments. Unlike value iteration, these algorithms do not require pre-specified environment model. But the GPPN method does not justify why they have replaced non-gated recurrent neural networks used in VINs with LSTM as gated-rnn technique. In this project, we changed the update module of VIN and GPPN, to see how other relevant update methods like gated recurrent unit (GRU) and Peephole LSTM perform as compared to non-gated RNN and LSTM. We generated the results for a 2D maze environments with 3 different transition kernels.

<div class="col p-0">
	<!-- <a class="badge grey waves-effect font-weight-light mr-1" href="#" target="_blank">PDF</a> -->
	<a class="badge grey waves-effect font-weight-light mr-1" href="https://github.com/pulkitverma25/alternatives-to-vin-and-gppn" target="_blank">Code</a>
</div>

