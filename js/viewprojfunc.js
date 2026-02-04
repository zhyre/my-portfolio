// Project Data
const projectsData = {
    'soar-system': {
        title: 'SOAR — Student Organization Activity Resource',
        category: 'Web Application · Django System',
        description: 'A web-based system designed to help students of Cebu Institute of Technology-University organizations efficiently plan, manage, and document activities while centralizing resources and approvals in one platform.',
        logo: 'images/SOAR_logo.png',
        purpose: 'To create a centralized and user-friendly web system that streamlines student organization activity management, resource tracking, and documentation while improving coordination between officers, members, and administrators.',
        how: 'Designed and developed a Django-based web application with role-based access control. Implemented structured workflows for activity creation, approval, and resource management. Focused on clear information architecture, intuitive navigation, and responsive layouts to ensure ease of use across devices.',
        why: 'Student organizations often rely on scattered tools and manual processes, leading to miscommunication, lost records, and inefficient coordination. SOAR addresses these challenges by providing a single, organized platform that simplifies activity planning and improves transparency.',
        when: 'Q3 2025',
        details: 'SOAR is a school-based web system built to support student organizations in managing activities and shared resources. The platform allows organizations to submit activity proposals, upload related documents, track approvals, and maintain organized records. The system improves efficiency, reduces manual paperwork, and enhances collaboration among stakeholders. Built as the lead developer with 2 other students from Cebu Institute of Technology-University.',
        technologies: ['Django', 'Python', 'HTML / CSS', 'Tailwind CSS', 'JavaScript', 'PostgreSQL', 'Supabase', 'Render'],
        links: [
            { title: 'Live Demo', url: 'https://soar-qxu2.onrender.com', type: 'demo' },
            { title: 'GitHub Repository', url: 'https://github.com/zhyre/SOARSYSTEM', type: 'code' },
            { title: 'Documentation', url: '#', type: 'document' }
        ],
        tags: ['Web Application', 'Django', 'System Design', 'Organization Management']
    }
};

// Get project ID from URL
function getProjectIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'soar-system';
}

// Load and display project details
function loadProjectDetails() {
    const projectId = getProjectIdFromURL();
    const project = projectsData[projectId];

    if (!project) {
        document.querySelector('.project-details-content').innerHTML = '<h2>Project not found</h2>';
        return;
    }

    // Set page title
    document.title = `${project.title} | Zhyre Coritico`;

    // Populate header
    document.getElementById('projectLogo').src = project.logo;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;

    // Populate consolidated details section with all information
    const consolidatedDetails = `
        <p><strong>Timeline:</strong> ${project.when}</p>
        <p><strong>Purpose:</strong> ${project.purpose}</p>
        <p><strong>Approach:</strong> ${project.how}</p>
        <p><strong>Impact:</strong> ${project.why}</p>
        <p>${project.details}</p>
    `;
    document.getElementById('projectDetails').innerHTML = consolidatedDetails;

    // Populate technologies
    const techHTML = project.technologies.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    document.getElementById('projectTechnologies').innerHTML = techHTML;

    // Populate links
    const linksHTML = project.links.map(link =>
        `<a href="${link.url}" class="project-link project-link-${link.type}" target="_blank">
            ${getLinkIcon(link.type)}
            ${link.title}
        </a>`
    ).join('');
    document.getElementById('projectLinks').innerHTML = linksHTML;
}

// Get icon for link type
function getLinkIcon(type) {
    const icons = {
        'demo': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
        'code': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        'document': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    };
    return icons[type] || '';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetails);
