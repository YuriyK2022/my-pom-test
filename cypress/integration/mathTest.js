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

      // Add assertions as needed
    });
  });
});
