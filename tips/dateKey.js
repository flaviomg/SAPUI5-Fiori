const startDate = new Date();
const dateF = sap.ui.model.odata.ODataUtils.formatValue(startDate, "Edm.DateTime");
 oDataModel.update(                `/FunctionSet(Id='${id}',DateId=${dateF})`,