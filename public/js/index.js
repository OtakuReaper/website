//Menu stuff
const projectMenu = document.getElementById('project-drop-menu');
const projectNavBtn = document.getElementById('project-menu-achor');

projectNavBtn.addEventListener("click", (e) => {
    if(projectMenu.style.display == ''){

        //closing other menus if open
        likesMenu.style.display = '';
        
        const rect = projectNavBtn.getBoundingClientRect();

        projectMenu.style.left = `${rect.left + window.scrollX}px`;
        projectMenu.style.top = `${rect.bottom + window.scrollY}px`;
        projectMenu.style.display = 'block';
    } else {
        projectMenu.style.display = '';
    }  
});

const likesMenu = document.getElementById('likes-drop-menu');
const likesNavBtn = document.getElementById('likes-menu-anchor');

likesNavBtn.addEventListener("click", (e) => {
    if(likesMenu.style.display == ''){
        
        //closing other menus if open
        projectMenu.style.display = '';

        const rect = likesNavBtn.getBoundingClientRect();

        likesMenu.style.left = `${rect.left + window.scrollX - 40}px`;
        likesMenu.style.top = `${rect.bottom + window.scrollY}px`;
        likesMenu.style.display = 'block';
    } else {
        likesMenu.style.display = '';
        
    }  
});
