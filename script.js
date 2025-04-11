fetch('data.json')
  .then(response => response.json())
  .then(data => {
    loadSection(data.education, "education");
    loadSection(data.professionalExperience, "professional-experience");
    loadListSection(data.humanLanguages, "human-languages");
    loadListSection(data.programmingSkills, "programming-skills");
  })
  .catch(error => console.error('Error fetching data:', error));
  
// For languages and programming skills
function loadListSection(entries, containerId) {
  const container = document.getElementById(containerId);

  entries.forEach(item => {
    let entry = document.createElement("div");
    entry.classList.add("list-entry");

    let language = document.createElement("strong");
    language.textContent = item.language;

    let proficiency = document.createElement("span");
    proficiency.textContent = ` — ${item.proficiency}`;

    entry.appendChild(language);
    entry.appendChild(proficiency);

    container.appendChild(entry);
  });
}
Result:
// Function to load either Education or Professional Experience section
function loadSection(entries, containerId) {
  const container = document.getElementById(containerId);

  entries.forEach(item => {
    let entry = document.createElement("div");
    entry.classList.add("resume-entry");

    let institution = document.createElement("strong");
    institution.textContent = item.institution;

    let period = document.createElement("span");
    period.textContent = ` (${item.period})`;

    let role = document.createElement("p");
    role.textContent = item.role;

    let description = document.createElement("p");
    description.textContent = item.description;

    entry.appendChild(institution);
    entry.appendChild(period);
    entry.appendChild(role);
    entry.appendChild(description);

    container.appendChild(entry);
  });
}
