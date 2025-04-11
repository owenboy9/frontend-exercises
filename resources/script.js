fetch('data.json')
  .then(response => response.json())  // Parse the JSON data
  .then(data => {
    loadSection(data.education, "education");
    loadSection(data.professionalExperience, "professional-experience");
  })
  .catch(error => console.error('Error fetching data:', error));

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
