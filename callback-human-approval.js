import { SFNClient, SendTaskSuccessCommand } from "@aws-sdk/client-sfn";

console.log("Loading function");

const resultMessage = "Successful";

export const handler = async (event, context) => {
  try {
    const client = new SFNClient({ region: "us-east-1" });
    let message = JSON.parse(event.Records[0].Sns.Message);
    let taskToken = message.TaskToken;

    console.log("Message received from SNS:", message);
    console.log("Task token: ", taskToken);

    // Return task token to Step Functions

    let params = {
      output: JSON.stringify(resultMessage),
      taskToken: taskToken,
    };

    console.log("JSON Returned to Step Functions: ", params);
    let command = new SendTaskSuccessCommand(params);
    let myResult = await client.send(command);
    console.log("State machine - callback completed..");

    return myResult;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
