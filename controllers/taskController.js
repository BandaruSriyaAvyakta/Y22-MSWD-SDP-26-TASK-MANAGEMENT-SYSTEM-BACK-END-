import Task from '../models/task.js'; // Ensure this import path is correct

export const createTask = async (req, res) => {
   try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
   } catch (error) {
      console.error('Error adding task:', error);
      res.status(500).json({ message: 'Error adding task', error: error.message });
   }
  };

  export async function getTasks(req, res) {
   try {
      const tasks = await Task.find({});
      res.json(tasks);
   } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error: error.message });
   }
  }

export async function getTaskById(req, res) {
 try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId); // Corrected from 'task' to 'Task'
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
 } catch (error) {
    res.status(500).json({ message: 'Error fetching task by id', error: error.message });
 }
}

export async function updateTask(req, res) {
   try {
      const taskId = req.params.id;
      const updatedData = req.body;
      const task = await Task.findByIdAndUpdate(taskId, updatedData, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
   } catch (error) {
      res.status(500).json({ message: 'Error updating task', error: error.message });
   }
  }

export async function deleteTask(req, res) {
 try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId); // Corrected from 'task' to 'Task'
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
 } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
 }
}
