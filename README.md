# POM-test by Cypress
Using Page Object Model template implement a java script to automate offensive actions and create tests for http://suninjuly.github.io/math.html:
- read the value of variable x
- calculate math function ln(abs(12*sin(x)))
- enter result in the text field
- choose checkbox "I'm the robot"
- choose radiobutton "Robots rule!"
- press Submit button

## Installation
1. In the command line create new project directory my-pom-test:
```sh
$ mkdir my-pom-test
$ cd my-pom-test
```
2. Initialize project with npm by running the following command:
```sh
$ npm init -y
```
This will create a package.json file for your project.

3. Install Cypress (I use Cypress 8.3.0) as a development dependency:
```sh
$ npm install cypress@8.3.0 --save-dev
```
## Open Cypress Test Runner and create test file
4. Open the Cypress Test Runner using the following command:
```sh
$ npx cypress open
```
5. Cypress Test Runner will open interactively:

![image](https://github.com/YuriyK2022/my-pom-test/assets/118524489/32d96188-6fe4-49b9-87d3-6a65953b6e17)

6. In the "Integration" folder (path ...\my-pom-test\cypress\integration) create JavaScript file for Page Object Model mathPage.js:
```js
class MathPage {
    visit() {
      cy.visit('http://suninjuly.github.io/math.html');
    }
  
    get x() {
      return cy.get('#input_value');
    }
  
    get resultField() {
      return cy.get('#answer');
    }
  
    get robotCheckbox() {
      return cy.get('[type="checkbox"]');
    }
  
    get robotsRadio() {
      return cy.get('[value="robots"]');
    }
  
    get submitButton() {
      return cy.get('[type="submit"]');
    }
  
    calculateFunction(x) {
      return Math.log(Math.abs(12 * Math.sin(x)));
    }
  
    fillResultField(value) {
      this.resultField.type(value);
    }
  
    checkRobotCheckbox() {
      this.robotCheckbox.check();
    }
  
    chooseRobotsRadio() {
      this.robotsRadio.check();
    }
  
    submitForm() {
      this.submitButton.click();
    }
  }
  
  export default new MathPage();
  
```
7. In the "Integration" folder (path ...\my-pom-test\cypress\integration) create JavaScript test file mathTest.js:
```js
import MathPage from './mathPage';

describe('Math Page Test', () => {
  beforeEach(() => {
    MathPage.visit();
  });

  it('should perform math operations', () => {
    MathPage.x.invoke('text').then((text) => {
      const x = parseFloat(text);
      const result = MathPage.calculateFunction(x);

      MathPage.fillResultField(result);
      MathPage.checkRobotCheckbox();
      MathPage.chooseRobotsRadio();
      MathPage.submitForm();

    });
  });
});

```
## Run Cypress Test
8. Go back into the Cypress Runner and click on the file mathTest.js:

![image](https://github.com/YuriyK2022/my-pom-test/assets/118524489/b6678025-c78e-416b-bd4b-63050387388b)

9. The browser is open (my default is Firefox) and test will execute, automating the actions on the webpage:

![image](https://github.com/YuriyK2022/my-pom-test/assets/118524489/18228d50-3604-4b37-9a5a-2be3a9c42dcc)

## Test Results
10. All tests is passing!

![image](https://github.com/YuriyK2022/my-pom-test/assets/118524489/6146e9c3-d04e-4bbc-ba91-657112e704ff)

