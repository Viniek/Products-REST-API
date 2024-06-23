# Running the Project
## Cloning my project
- Create a new folder
- open cmd and navigate to the folder directory
- run <pre>git clone https://github.com/Viniek/Products-REST-API</pre>
-Then run(***Ignore if you do not have vscode.***) <pre>code .</pre>to open  vscode if you have one.  


## Setting up the project
### ***1.Initialize a new Node.js project.***  

***- To create a new project with your own settings,run***
<pre> npm init </pre>

 or run,
 <pre> npm init -y </pre>
 ***to set up a new project with the deafault instructions.***

### **2.Install the necessary dependencies**   
- ***express***. In cmd,<pre>npm init -y
npm install express</pre>

- ***pg*** 
- ***dotenv***.In cmd,run,  
<pre>npm install dotenv</pre>

### ***3.Install express*** 
<pre>  npm install express</pre>

### ***4.Install pg***
<pre>npm install pg</pre>

### ***5.Install dotenv***
<pre>npm install dotenv</pre>

### ***6.install nodemon***(optional)
<pre>npm install nodemon</pre>

## Configure the project
In package.json ,
<pre> "type":"module",</pre>
under scripts,
<pre>
"start": ",node ./src/index.js",
    "start:watch":"nodemon ./src/index.js"</pre>

### Running the Project
In git bash,
<pre>npm run start:watch</pre>

### Running Subsequent projects
- ***crash previous server***   
-In git bash,hit  ***ctrl+c*** simulteneously
- ***Then run***<pre>npm run start:watch</pre>

    
    :API developed courtesy of &copy;Viniek , 
    All rights reserved








