import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Backend101ScalaStarterUndergroundquizscene2 } from "./backend-101-scala-starter-undergroundquizscene-2";

describe("The Backend101ScalaStarterUndergroundquizscene2 stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new Backend101ScalaStarterUndergroundquizscene2(app, "Backend101ScalaStarterUndergroundquizscene2", { stack: "playground", stage: "TEST" });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
