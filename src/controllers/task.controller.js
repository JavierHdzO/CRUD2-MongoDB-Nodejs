import Task from "../models/Task";

export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks });
};

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const updateEditTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toogleTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  task.save();

  res.redirect("/");
};
