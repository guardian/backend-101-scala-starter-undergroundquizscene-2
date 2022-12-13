import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { Backend101ScalaStarterUndergroundquizscene2 } from "../lib/backend-101-scala-starter-undergroundquizscene-2";

const app = new App();
new Backend101ScalaStarterUndergroundquizscene2(app, "Backend101ScalaStarterUndergroundquizscene2-CODE", { stack: "playground", stage: "CODE" });
