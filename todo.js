const fs = require('fs');
const path = require('path');

// File where todos will be stored
const TODO_FILE = path.join(__dirname, 'todos.json');

// Load existing todos from the file, or return an empty array if the file doesn't exist
function loadTodos() {
    if (!fs.existsSync(TODO_FILE)) {
        return [];
    }
    try {
        const data = fs.readFileSync(TODO_FILE);
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading todo file:', err);
        return [];
    }
}

// Save todos to the file
function saveTodos(todos) {
    try {
        fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 4));
    } catch (err) {
        console.error('Error writing todo file:', err);
    }
}

// Add a new todo
function addTodo(task) {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`Task "${task}" added.`);
}

// Delete a todo by index
function deleteTodo(index) {
    const todos = loadTodos();
    if (index >= 0 && index < todos.length) {
        const removed = todos.splice(index, 1);
        saveTodos(todos);
        console.log(`Task "${removed[0].task}" deleted.`);
    } else {
        console.log('Invalid index.');
    }
}

// Mark a todo as done by index
function markDone(index) {
    const todos = loadTodos();
    if (index >= 0 && index < todos.length) {
        todos[index].done = true;
        saveTodos(todos);
        console.log(`Task "${todos[index].task}" marked as done.`);
    } else {
        console.log('Invalid index.');
    }
}

// List all todos with their status
function listTodos() {
    const todos = loadTodos();
    if (todos.length === 0) {
        console.log('No todos found.');
    } else {
        todos.forEach((todo, i) => {
            const status = todo.done ? 'Done' : 'Not Done';
            console.log(`${i}: ${todo.task} [${status}]`);
        });
    }
}

// Main CLI function
function main() {
    const args = process.argv.slice(2);
    console.log('Arguments:', args);  // Debugging line
    const command = args[0];
    const param = args[1];

    console.log('Command:', command);  // Debugging line

    switch (command) {
        case 'add':
            if (param) {
                addTodo(param);
            } else {
                console.log('Please provide a task to add.');
            }
            break;
        case 'delete':
            if (param) {
                deleteTodo(parseInt(param, 10));
            } else {
                console.log('Please provide the index of the task to delete.');
            }
            break;
        case 'done':
            if (param) {
                markDone(parseInt(param, 10));
            } else {
                console.log('Please provide the index of the task to mark as done.');
            }
            break;
        case 'list':
            listTodos();
            break;
        case 'help':
            console.log('Commands:');
            console.log('  add <task>       - Add a new task');
            console.log('  delete <index>   - Delete a task by index');
            console.log('  done <index>     - Mark a task as done by index');
            console.log('  list             - List all tasks');
            console.log('  help             - Show this help message');
            break;
        default:
            console.log('Unknown command. Type "help" for a list of commands.');
            break;
    }
}

main();
