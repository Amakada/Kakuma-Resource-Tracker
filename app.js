//This section demonstrates how to grab DOM Elements for manipulation
const form = document.getElementById('resourceForm');
const resourceList = document.getElementById('resourceList');
const counter = document.getElementById('counter');
const searchInput = document.querySelector('.search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

//This section demonstrates how to handle states management in Javascript
let resources = JSON.parse(localStorage.getItem('resources'));
let currentFilter = 'all';
let searchTerm = '';

//This section demonstrates how we should initialize the application
function init() {
    renderResources();
    bindEvents();
    updateCounter();
};

//In this section we demonstrate how to bind events to DOM Elements
function bindEvents() {
    form.addEventListener('submit', handleSubmit);
    searchInput.addEventListener('input', handleSearch);
    resourceList.addEventListener('click', handleResourceClick);
    filterButtons.forEach(btn=>{
        btn.addEventListener('click', handleFilterClick);
    })
} 