import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { Backend101 } from "../lib/backend-101";

const app = new App();
new Backend101(app, "Backend101-CODE", { stack: "deploy", stage: "CODE" });
