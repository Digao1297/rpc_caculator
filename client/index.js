const WebSocket = require("rpc-websockets").Client;
const readline = require("readline-sync");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", async () => {
  let option = 0;
  do {
    console.log(
      `----------Calculator---------- \n0 - Sair \n1 - Addition \n2 - Subtraction \n3 - Multiplication \n4 - Division\n-----------------------------\n`
    );
    option = readline.question();

    switch (option) {
      case "1":
        await ws.call("add", GetParams()).then(function (result) {
          console.log(`Result ${result} \n`);
        });
        break;
      case "2":
        await ws.call("sub", GetParams()).then(function (result) {
          console.log(`Result ${result} \n`);
        });
        break;
      case "3":
        await ws.call("mult", GetParams()).then(function (result) {
          console.log(`Result ${result} \n`);
        });
        break;
      case "4":
        await ws.call("div", GetParams()).then(function (result) {
          console.log(`Result ${result} \n`);
        });
        break;
      case "0":
        break;
      default:
        console.log("invalid option!!");
        break;
    }
  } while (option != 0);
  ws.close();
});

function GetParams() {
  let input = readline.question("type the numbers, separated by space\n");
  let data = input.split(" ");

  return data.map((param) => parseFloat(param));
}
