const { expect } = require("chai");
const faker = require("faker");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

describe("Native Demo App", () => {
  it("Fill Sign Up Form", async () => {
    const loginButton = await driver.$(
      '//android.widget.Button[@content-desc="Login"]'
    );
    await loginButton.click();

    const signUpButton = await driver.$(
      '//android.view.ViewGroup[@content-desc="button-sign-up-container"]'
    );
    await signUpButton.click();

    const email = await driver.$(
      '//android.widget.EditText[@content-desc="input-email"]'
    );
    await email.setValue(
      faker.name.firstName() + faker.name.lastName() + "@yopmail.com"
    );

    const password = await driver.$(
      '//android.widget.EditText[@content-desc="input-password"]'
    );
    await password.setValue("Akuntest1");

    const confirmpassword = await driver.$(
      '//android.widget.EditText[@content-desc="input-repeat-password"]'
    );
    await confirmpassword.setValue("Akuntest1");

    const signupButton = await driver.$(
      '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup'
    );
    await signupButton.click();

    await sleep(5000);

    it("Assert Alert Success", async () => {
      const AssertSuccess = await driver
        .$(
          "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView"
        )
        .isDisplayed();

      await expect(AssertSuccess).to.equal(true);

      const AssertSuccesssub = await driver
        .$(
          "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView"
        )
        .isDisplayed();

      await expect(AssertSuccesssub).to.equal(true);

      it("Click OK", async () => {
        const Ok = await driver.$(
          "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button"
        );

        await Ok.click();
      });
    });
  });
});
