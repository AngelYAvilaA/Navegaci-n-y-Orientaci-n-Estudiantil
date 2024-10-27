
// Añadir interactividad a los rectángulos
document.querySelectorAll('#Edificios rect').forEach(function(element) {
    element.addEventListener('click', function() {
        alert(`Has hecho clic en ${element.id}`);
    });
    element.addEventListener('mouseenter', function() {
        element.classList.add('highlight');
    });
    element.addEventListener('mouseleave', function() {
        element.classList.remove('highlight');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const highlightBtns = document.querySelectorAll('.highlight-btn');


    function openSidebar() {
        sidebar.classList.add('open');
        toggleBtn.classList.add('hidden');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        toggleBtn.classList.remove('hidden');
    }

    toggleBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    highlightBtns.forEach(button => {
        button.addEventListener('click', () => {
            const group = button.getAttribute('data-group');
            document.querySelectorAll('#Edificios rect').forEach(element => {
                element.classList.remove('highlight');
                if (group !== 'clear' && element.dataset.group === group) {
                    element.classList.add('highlight');
                }
            });
        });    
    }); 
});
