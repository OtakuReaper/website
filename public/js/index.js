//Menu stuff
const projectMenu = document.getElementById('project-drop-menu');
const projectNavBtn = document.getElementById('project-menu-achor');

projectNavBtn.addEventListener("click", (e) => {
    if(projectMenu.style.display == ''){
        
        const rect = projectNavBtn.getBoundingClientRect();

        projectMenu.style.left = `${rect.left + window.scrollX}px`;
        projectMenu.style.top = `${rect.bottom + window.scrollY}px`;
        projectMenu.style.display = 'block';
    } else {
        projectMenu.style.display = '';
    }  
});
