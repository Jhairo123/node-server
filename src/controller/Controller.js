import * as model from "../model/Model.js";
import * as view from "../view/View.js";

function showMenuOp(option) {
  // Evaluar la opción seleccionada utilizando switch
  switch (option) {
    case 1:
      model.addTask();
      model.showTask();
      run();
      break;
    case 2:
      model.deleteTask();
      model.showTask();
      run();
      break;
    case 3:
      model.completeTask();
      model.showTask();
      run();
      break;
    case 4:
      view.exit();
      break;
    default:
      console.log("Opción no reconocida");
  }
}

function run() {
  view.showView();
  showMenuOp(view.option);
}
run();
