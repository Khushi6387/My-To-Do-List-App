
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const messageBox = document.getElementById('messageBox');
const quoteText = document.getElementById('quoteText');
const getNewQuoteBtn = document.getElementById('getNewQuoteBtn');


const motivationalQuotes = [
    "The best way to predict the future is to create it.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop."
]
function showMessage(message, type = 'error') {
    messageBox.textContent = message;
    messageBox.classList.remove('hidden', 'bg-red-100', 'bg-green-100', 'text-red-700', 'text-green-700');
    if (type === 'error') {
        messageBox.classList.add('bg-red-100', 'text-red-700');
    } else {
        messageBox.classList.add('bg-green-100', 'text-green-700');
    }
    setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 3000); // 3 seconds baad message ko chupayein
}


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        showMessage('Please write a task first.');
        return;
    n
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm hover:bg-gray-100 transition duration-20
    const taskSpan = document.createElement('span');  
    taskSpan.textContent = taskText;
    taskSpan.className = 'text-gray-800 flex-grow';

    
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed-task');
        if (taskSpan.classList.contains('completed-task')) {
            showMessage('Task completed!', 'success');
        } else {
            showMessage('Task unmarked.', 'success');
        }
    });

  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'ml-4 flex gap-2';

    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition duration-200';
    removeButton.onclick = function() {
        
        taskList.removeChild(li);
        showMessage('Task removed.', 'success');
    };

    
    buttonContainer.appendChild(removeButton);

  
    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    
    taskList.appendChild(li);

    taskInput.value = '';
    showMessage('New task added!', 'success');
}
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quoteText.textContent = motivationalQuotes[randomIndex];
}


addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


getNewQuoteBtn.addEventListener('click', displayRandomQuote);


window.onload = displayRandomQuote;
