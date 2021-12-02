---
layout: project
title: Agent Interrogation
nav: projects
importance: 110
type: research
description: "Learning Interpretable Action Models Through Query Answering"
img: /assets/img/projects/aia/aia.jpg
---

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Asking the Right Questions: Learning Interpretable Action Models Through Query Answering</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">
<!-- <h5>Asking the Right Questions: Learning Interpretable Action Models Through Query Answering</h5> -->

		This paper develops a new approach for estimating an interpretable, relational model of a black-box autonomous agent that can plan and act. Our main contributions are a new paradigm for estimating such models using a rudimentary query interface with the agent and a hierarchical querying algorithm that generates an interrogation policy for estimating the agent's internal model in a user-interpretable vocabulary. Empirical evaluation of our approach shows that despite the intractable search space of possible agent models, our approach allows correct and scalable estimation of interpretable agent models for a wide class of black-box autonomous agents. Our results also show that this approach can use predicate classifiers to learn interpretable models of planning agents that represent states as images.
		<p></p>

		<div class="col p-0">
			<a class="badge grey waves-effect font-weight-light mr-1" href="{{ '/assets/pdf/vms_aaai21/vms_aaai21.pdf' | prepend: site.baseurl }}" target="_blank">PDF</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="/assets/pdf/vms_aaai21/vms_aaai21_slides.pdf" target="_blank">Slides</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="/assets/pdf/vms_aaai21/vms_aaai21_poster.pdf" target="_blank">Poster</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="https://github.com/AAIR-lab/AIA-AAAI21" target="_blank">Code</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="http://arxiv.org/abs/1912.12613" target="_blank">arXiv</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="https://slideslive.com/38948683/asking-the-right-questions-learning-interpretable-action-models-through-query-answering" target="_blank">Video</a>
		</div>
	</ul>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Differential Assessment of Black-Box AI Agents</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">

		Much of the research on learning symbolic models of AI agents focuses on agents with stationary models. This assumption fails to hold in settings where the agent’s capabilities may change as a result of learning, adaptation, or other post-deployment modifications. Efficient assessment of agents in such settings is critical for learning the true capabilities of an AI system and for ensuring its safe usage. In this work, we propose a novel approach to differentially assess black-box AI agents that have drifted from their prior known models. As a starting point, we consider the fully observable and deterministic setting. We leverage observations of the agent’s current behavior and knowledge of the initial model to generate an active querying policy that selectively queries the agent and computes an updated model of its functionality. Empirical evaluation shows that our approach is much more efficient than re-learning the agent model from scratch. We also show that the cost of differential assessment using our method is proportional to the amount of drift in the agent’s functionality.
		<p></p>

	</ul>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Learning User-Interpretable Descriptions of Black-Box AI System Capabilities</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">

		Several approaches have been developed to answer specific questions that a user may have about an AI system that can plan and act. However, the problems of identifying which questions to ask and that of computing a user-interpretable symbolic description of the overall capabilities of the system have remained largely unaddressed. This paper presents an approach for addressing these problems by learning user-interpretable symbolic descriptions of the limits and capabilities of a black-box AI system using low-level simulators. It uses a hierarchical active querying paradigm to generate questions and to learn a user-interpretable model of the AI system based on its responses. In contrast to prior work, we consider settings where imprecision of the user's conceptual vocabulary precludes a direct expression of the agent's capabilities. Furthermore, our approach does not require assumptions about the internal design of the target AI system or about the methods that it may use to compute or learn task solutions. Empirical evaluation on several game-based simulator domains shows that this approach can efficiently learn symbolic models of AI systems that use a deterministic black-box policy in fully observable scenarios.
		<p></p>

		<div class="col p-0">
			<a class="badge grey waves-effect font-weight-light mr-1" href="{{ '/assets/pdf/vms_keps21/vms_keps21.pdf' | prepend: site.baseurl }}" target="_blank">PDF</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="/assets/pdf/vms_keps21/vms_keps21_slides.pdf" target="_blank">Slides</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="http://arxiv.org/abs/2107.13668" target="_blank">arXiv</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="https://www.youtube.com/watch?v=iqYCjjM83EI" target="_blank">Video</a>
		</div>
	</ul>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Learning Causal Models of Autonomous Agents using Interventions</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">

		One of the several obstacles in the widespread use of AI systems is the lack of requirements of interpretability that can enable a layperson to ensure the safe and reliable behavior of such systems. We extend the analysis of an agent assessment module that lets an AI system execute high-level instruction sequences in simulators and answer the user queries about its execution of sequences of actions. We show that such a primitive query-response capability is sufficient to efficiently derive a user-interpretable causal model of the system in stationary, fully observable, and deterministic settings. We also introduce dynamic causal decision networks (DCDNs) that capture the causal structure of STRIPS-like domains. A comparative analysis of different classes of queries is also presented in terms of the computational requirements needed to answer them and the efforts required to evaluate their responses to learn the correct model.
		<p></p>

		<div class="col p-0">
			<a class="badge grey waves-effect font-weight-light mr-1" href="{{ '/assets/pdf/vs_genplan21/vs_genplan21.pdf' | prepend: site.baseurl }}" target="_blank">PDF</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="/assets/pdf/vs_genplan21/vs_genplan21_slides.pdf" target="_blank">Slides</a>
			<a class="badge grey waves-effect font-weight-light mr-1" href="/assets/pdf/vs_genplan21/vs_genplan21_poster.pdf" target="_blank">Poster</a>
		</div>
	</ul>
</div>