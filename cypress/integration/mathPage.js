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
  