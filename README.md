# qa-zadatak-smartcat 

The automated test can be found on git repository: https://github.com/rade-radovic/qa-zadatak-smartcat.git

Test are written in cypress.io

After cloning the repository you can install cypress with npm. In root directory run comands:

```npm init```
```npm install cypress --save-dev```


To open cypress run command:
```npx cypress open```
After cypress is open, you can run each spec individually


to run cypress in headless mode run:
```npx cypress run```

# Note1:

Since I didn't have info on expected results I couldn't make assertations on certain data. Instead, I manipulated data in some way and loged the results with console.log().
So, when running specs, I recommend you open the console to see the results.
Ofcourse, this is not how I would write tests in regular circumstances, I would always have some expected reults to compare them to. 

# Note2:
Some tests will fail, but this is expected, since I am asserting some end times to be after start times, and there seems to be a bug here.