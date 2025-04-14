fetch('data.json')
  .then(response => response.json())
  .then(data => {
    loadSection(data.education, "education");
    loadSection(data.professionalExperience, "professional-experience");
    loadListSection(data.humanLanguages, "human-languages");
    loadListSection(data.programmingSkills, "programming-skills");
  })
  .catch(error => console.error('Error fetching data:', error));
  
function loadListSection(entries, containerId) {
  const container = document.getElementById(containerId);

  // Group entries by proficiency level
  const grouped = entries.reduce((acc, item) => {
    const level = item.proficiency;
    if (!acc[level]) acc[level] = [];
    acc[level].push(item.language);
    return acc;
  }, {});

  // Define desired order of proficiency levels
  const levelPriority = [
    'native',
    'near-native',
    'proficient',
    'advanced',
    'passive advanced',
    'intermediate',
    'beginner',
    'passive',
    'basic'
  ];

  const sortedLevels = Object.keys(grouped).sort((a, b) => {
    const priorityA = levelPriority.indexOf(a.toLowerCase());
    const priorityB = levelPriority.indexOf(b.toLowerCase());
    return priorityA - priorityB;
  });

  // Build and append entries
  sortedLevels.forEach(level => {
    const entry = document.createElement("div");
    entry.classList.add("list-entry");

    const p = document.createElement("p");
    p.textContent = `${grouped[level].join(', ')} — ${level}`;

    entry.appendChild(p);
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
