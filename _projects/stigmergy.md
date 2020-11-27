---
layout: project
title: Stigmergic Communication
nav: projects
importance: 30
type: academic
description: Robot Cooperation Through Stigmergic Communication
img: /assets/img/projects/stigmergy/stigmergy_network.png
---

<h5>This work was done at <a href="http://www.iitg.ac.in/cse/robotics/" target="_blank">Robotics Lab, IIT Guwahati</a>.</h5>

The aim of this work is to enable the robots to perform sequential tasks by cooperating with each other via stigmergic communication. Mobile Agents are used for implementing stigmergy and to make the system decentralized. To test the feasibilty of the system, a task is subdivided into a set of 5 sequential tasks. 5 mobile agents are released in the mobile agent system where the execute themselves on 3 robots. <a href="https://en.wikipedia.org/wiki/Lego_Mindstorms_NXT" target="_blank">LEGO NXT Mindstorms</a> bricks, <a href="http://www.iitg.ernet.in/cse/robotics/?page_id=477" target="_blank">Typhon</a> and <a href="http://www.iitg.ernet.in/cse/robotics/?page_id=477" target="_blank">LEGO NXT Interface for Prolog</a> were used in the experiments.

<div class="col p-0">
    <a class="badge grey waves-effect font-weight-light mr-1" href="https://www.youtube.com/watch?v=598MbObF6SM" target="_blank">Video</a>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Agent Descriptions</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">
            <li class="list-group-item"><b>Agent 1</b>: Whenever it finds a robot in state S0, it starts moving the robot forward until an obstacle is detected by the robot. As soon as it finds the obstacle, it makes the robot to turn towards WEST. After the robot turns to WEST, the agent again makes it to move forward in a straight line until the robot detects a black colour surface. At this point, the agent changes the state of the robot to S1 and moves away. </li>
            <li class="list-group-item"><b>Agent 2</b>: This agent catch holds of the robot in state S1. It makes the robot to move straight over the black surface. When the robot crosses the black surface to enter into the white surface, it makes the robot move forward 50 steps and then turns the robot towards NORTH. Beyond that the robot moves forward in a straight line till it detects an obstacle. At this point, the agent changes the state of the robot to S2 and moves away.</li>
            <li class="list-group-item"><b>Agent 3</b>: This agent checks whether a robot is in state S2. If so, then it starts executing an obstacle avoidance algorithm till the robot goes away from the vicinity of the obstacle. After which, it aligns the robot towards NORTH. Further, it changes the state of the robot to S3 and moves away.</li>
            <li class="list-group-item"><b>Agent 4</b>: This agent looks for a robot in state S3. After finding such a robot, it makes it to move forward in a straight line until a black surface is detected. On such a detection, robots turns towards EAST. After turning, the agent starts executing a black line following algorithm. It continues to execute so until a yellow colour surface is detected. At this point, the agent changes the state of the robot to S4 and moves away.</li>
            <li class="list-group-item"><b>Agent 5</b>: Agent 5 completes the last part of the puzzle. It gets a robot which is in state S4. It makes the robot to turn towards SOUTH. After turning, the robot moves in a straight line until an obstacle is detected. Once the obstacle is detected, it makes the robot to go near to the obstacle and grab it using claws. Further, the robot turns towards EAST, moves forward 50 steps and releases the object from its claws.</li>
    </ul>
</div>
<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Map</h3>
    <div class="card-text font-weight-light list-group list-group-flush">
        <img img style="height:auto;width:100%;" src="/assets/img/projects/stigmergy/stigmergy_map.png" alt="Map" class="center">
        <p>
        The directions do not follow usual compass conventions so as to match with the recorded video. The video is available at the bottom of this page.
        </p>
    </div>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Approach</h3>
    <div class="card-text font-weight-light list-group list-group-flush">
        <p>
        We used ten nodes, five of which formed the ‘backbone network’. This backbone network was a ring. Each of the other five nodes was connected to one of the backbone nodes. And the whole communication of these ‘local nodes’ was with this ‘global node’.
        </p>
        <img img style="height:auto;width:100%;" src="/assets/img/projects/stigmergy/stigmergy_network.png" alt="Ring Network" class="center">
        <p>
        We defined a ‘state’ predicate at each node that maintained the state the associated robot was in. So, if a robot is in state S0, the first agent executes the code and changes the state to S1. We also used intermediate states on the global nodes, so that, if a robot is executing some code, and another agent visits the corresponding global node, it may be directly sent to the next node, knowing that the local node is busy.
        </p>
    </div>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Final Video</h3>
    <div class="card-text font-weight-light list-group list-group-flush">
        <div class="embed-responsive embed-responsive-16by9" style="max-width:100%; max-height:480px;">
            <iframe class ="embed-responsive-item" src="https://www.youtube.com/embed/598MbObF6SM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
    </div>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">Acknowledgement</h3>
    <div class="card-text font-weight-light">
        This work was done under the guidance of <a href="http://www.iitg.ac.in/cse/internet-pages/sbnair" target="_blank">Dr. Shivashankar B. Nair</a> and <a href="https://sites.google.com/view/shashi-iitrpr/" target="_blank">Dr. Shashi Shekhar Jha</a> at <a href="http://www.iitg.ac.in/cse/robotics/" target="_blank">Robotics Lab, IIT Guwahati</a>.
    </div>
</div>

<div class="card mt-3 p-3">
    <h3 class="card-title" style="color:#b71c1c;">References</h3>
    <ul class="card-text font-weight-light list-group list-group-flush">
        <li class="list-group-item">Shashi Shekhar Jha, W. Wilfred Godfrey, and Shivashankar B. Nair. <b><a href="https://www.tandfonline.com/doi/abs/10.1080/01969722.2014.917235" target="_blank">"Stigmergy-Based Synchronization of a Sequence of Tasks in a Network of Asynchronous Nodes"</a></b>, Cybernetics and Systems, 45(5), pp.373-406, 2014.</li>
        <li class="list-group-item">Shashi Shekhar Jha, and Shivashankar B. Nair. <b><a href="https://link.springer.com/chapter/10.1007/978-3-319-11584-9_8" target="_blank">"Orchestrating the sequential execution of tasks by a heterogeneous set of asynchronous mobile agents"</a></b>, In German Conference on Multiagent System Technologies, pp.103-120, 2014.</li>
    </ul>
</div>