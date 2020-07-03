# docker-complex-fibonacci

<style>
  .terminal {
      background-color: black;
      text: white;
  }   
</style>

<h1> What's this? </h1>

<p> This repository is to track progress on Udemy's docker + kubernetes course.</p>
<p>It's a very simple proyect that has an over-complicated architecture for the sake of having multiple containers running as if it were a real big application. It simply calculates a Fibonacci value from a given index in a react application. Please look at the bellow diagram to understand the involved components.
</p>

<h2>Solution Architecture - Development environment</h2>

<img src="./images/dev.jfif" width=700/>

<h2> Pre requisite </h2>
<p> To have docker installed in your computer </p>

<h2>Run locally</h2>
<div class="terminal">
<pre>
#> docker-compose up --build
</pre>
</div>
 <p> Then, as define in docker-compose.yml go to <a href="http://localhost:3050">http://localhost:3050</a> to see the react application running.
