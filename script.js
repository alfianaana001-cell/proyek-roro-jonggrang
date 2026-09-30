document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const themeToggle = document.getElementById('themeToggle');
    
    const petBody = document.getElementById('petBody');
    const pupils = document.querySelectorAll('.pet-pupil');
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        
        let filteredTasks = tasks.filter(task => {
            if (currentFilter === 'completed') return task.completed;
            if (currentFilter === 'pending') return !task.completed;
            return true;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = `
                <div class="empty-state">
                    <div class="mascot">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
                    <p>Alhamdulillah kosong! Wayahe rebahan, maraton anime, utawa maca novel sek rek! 🛌✨</p>
                </div>
            `;
            return;
        }

        filteredTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

        filteredTasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-card ${task.completed ? 'completed' : ''}`;
            
            const deadlineDate = new Date(task.deadline).toLocaleString('id-ID', {
                day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute:'2-digit'
            });

            taskEl.innerHTML = `
                <div class="task-info">
                    <h3>${task.name}</h3>
                    <div class="task-meta">
                        <span><i class="fas fa-tag"></i> ${task.category}</span> | 
                        <span><i class="fas fa-clock"></i> ${deadlineDate}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn-complete" onclick="toggleComplete(${task.id})">
                        <i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i>
                    </button>
                    <button class="btn-delete" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            taskList.appendChild(taskEl);
        });
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newTask = {
            id: Date.now(),
            name: document.getElementById('taskName').value,
            category: document.getElementById('taskCategory').value,
            deadline: document.getElementById('taskDeadline').value,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskForm.reset();
    });

    window.toggleComplete = (id) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        }
    };

    window.deleteTask = (id) => {
        if(confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
            tasks = tasks.filter(t => t.id !== id);
            saveTasks();
            renderTasks();
        }
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderTasks();
        });
    });

    renderTasks();

    /* LOGIKA KARAKTER INTERAKTIF */
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        pupils.forEach(pupil => {
            const rect = pupil.parentElement.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const deltaX = mouseX - eyeCenterX;
            const deltaY = mouseY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);
            
            const maxDistance = 4;
            const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY) / 20);

            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;

            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    });

    if (petBody) {
        petBody.addEventListener('click', () => {
            petBody.classList.remove('jump-spin');
            void petBody.offsetWidth; 
            petBody.classList.add('jump-spin');
        });
    }
});
