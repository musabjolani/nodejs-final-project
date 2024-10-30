const actionRep = require("../repositories/actionRep");

const getAllActions = async () => {
  try {
    //const { actions } = await actionRep.getAllActions();
    return await actionRep.getAllActions();
  } catch (error) {
    return [];
  }
};

const getAllActionsById = async (id) => {
  const result = await actionRep.getAllActions();
  if (!result.actions) return [];
  return result.actions.filter((action) => action.id === +id);
};

const getAllActionsByIdAndDate = async (id, date) => {
  const result = await actionRep.getAllActions();
  if (!result.actions) return [];
  return result.actions.filter(
    (action) => action.id === +id && action.date === date
  );
};

const addAction = async (action) => {
  let result = await getAllActions();
  if (!result.actions) result = { actions: [] };
  result.actions.push(action);
  await actionRep.updateAction(result);
  return "Actions Added";
};

const updateAction = async (id, date, action) => {
  let result = await getAllActions();
  let index = result.actions.findIndex(
    (action) => action.id === +id && action.date === date
  );
  if (index == -1) return "Action Not Found";
  result.actions[index] = action;
  await actionRep.updateAction(result);
  return "Actions Updates";
};

module.exports = {
  getAllActions,
  getAllActionsById,
  getAllActionsByIdAndDate,
  addAction,
  updateAction,
};
