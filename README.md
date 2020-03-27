# MotiveRate
An app that promotes goal achieving and motivation built around social media and gamified points-based systems.

<h2>Installation</h2>

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

<h4>Back-End</h4>

To set up the server, run the following commands in the rails directory

```
$ bundle install
$ rails db:migrate:reset db:seed
$ rails s
```
<h4>Front-End</h4>

To set up the client-side, run the following commands in the react directory

```
$ npm i
$ npm start
```

Now you're ready to demo the website. Your application should start automatically
<br />
<br />
<em>Note: <br />
  In order to make the best use of the 'user update support feature', two accounts
  should be created. <br />
  There are no limits on supporter incrementation amount for ideal demonstration purposes</em>
