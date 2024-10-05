# CLI Todo Application

This is a simple command-line interface (CLI) todo application built with Node.js. It allows you to manage your tasks directly from the terminal.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as done
- List all tasks
- Persistent storage using a JSON file

## Installation

1. Ensure you have Node.js installed on your system.
2. Clone this repository or download the source code.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.

## Usage

The application can be run using Node.js. Here are the available commands:

### Add a new task

```
node todo.js add "Your task description"
```

### Delete a task

```
node todo.js delete <task_index>
```

Replace `<task_index>` with the index of the task you want to delete.

### Mark a task as done

```
node todo.js done <task_index>
```

Replace `<task_index>` with the index of the task you want to mark as done.

### List all tasks

```
node todo.js list
```

### Show help

```
node index.js help
```

## File Structure

- `todo.js`: The main application file containing all the logic.
- `todos.json`: JSON file where tasks are stored (created automatically).

## How It Works

- Tasks are stored in a `todos.json` file in the same directory as the script.
- Each task is an object with `task` (string) and `done` (boolean) properties.
- The application reads from and writes to this file to maintain task persistence.

## Error Handling

- The application handles cases where the todo file doesn't exist or can't be read/written.
- It also checks for valid indexes when deleting or marking tasks as done.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project. You can also open issues for any bugs you find or features you think would be beneficial.

## License

This project is open source and available under the [MIT License](LICENSE).
