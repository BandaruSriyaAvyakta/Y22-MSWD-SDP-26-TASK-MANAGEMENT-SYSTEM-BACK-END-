import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['To-do', 'In Progress', 'Done', 'Doing'],
        default: 'To-do',
    },
    dueDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    timeTaken: {
        type: Number,
        min: 0,
    },
});

const TaskModel = mongoose.model('Task', TaskSchema);
export default TaskModel;
