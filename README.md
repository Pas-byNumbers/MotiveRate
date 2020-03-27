# MotiveRate
An app that promotes goal achieving and motivation built around social media and gamified points-based systems.

<h1>Installation</h1>

<em>This App requires 
  <ul>
    <li>Ruby</li>
    <li>Rails</li>
    <li>Node</li>
  </ul>
</em>

<p>After forking and cloning the repository in to your directory of choice, 
  <br />
  open two terminal windows (one for back-end, one for front-end)
<br />
  <br />
For the first terminal window, enter <code>cd MotiveRate-Api/</code> (Back-End)
<br />
  For the second terminal window, enter <code>cd motiverate-client/</code> (Front-End)
</p>

<h2>Back-End</h2>

To set up the server, run the following commands in the rails directory

```
$ bundle install
$ rails db:migrate:reset db:seed
$ rails s
```
<h2>Front-End</h2>

To set up the client-side, run the following commands in the react directory

```
$ npm i
$ npm start
```

Now you're ready to demo the website. Your application should start automatically
