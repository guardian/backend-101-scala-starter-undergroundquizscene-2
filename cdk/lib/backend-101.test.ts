import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Backend101 } from "./backend-101";

describe("The Backend101 stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new Backend101(app, "Backend101", { stack: "playground", stage: "TEST" });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
