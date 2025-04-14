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
    form.addEventListener('submit', handleFormSubmit);
    searchInput.addEventListener('input', handleSearch);
    resourceList.addEventListener('click', handleResourceClick);
    filterButtons.forEach(btn=>{
        btn.addEventListener('click', handleFilterClick);
    })
} 
//This section demonstrates how to handle events
function handleFormSubmit(e) {
    e.preventDefault();

const formData = new FormData(form);
const resource = {
   name: formData.get('resourceName').trim(), 
   type: formData.get('resourceType'),
   location: formData.get('resourceLocation').trim(),
   id: Date.now().toString(),
   dateAdded: new Date().toLocaleDateString()
};
if(validateForm(resource)) {
  addResource(resource);
  form.reset();
  clearErrors();
}
}
//This section demonstrates how to validate form inputs
function validateForm(resource) {
    let isValid = true;
    if(resource.name){
        showError('nameError', ' Resource Name is required');
        isValid = false;
    }
    if(resource.type){
        showError('typeError', ' Resource Type is required');
        isValid = false;
    }
    if(resource.location){
        showError('locationError', ' Resource Location is required');
        isValid = false;
    }
    return isValid;
}
 function showError(elemenntId, message) {
    const erroElement = document.getElementById(elementId);
    errorElement.textContent = message;
 }
 function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el=>{
        el.textContent = '';
    });
 }