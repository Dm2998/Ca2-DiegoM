
// Experience Timeline
// Scroll Animation for Timeline Items
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".experience-timeline-item");

    // Function to add 'visible' class when the item comes into view
    const scrollAnimations = () => {
        const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% of the viewport is reached

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerPoint) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    };

    // Attach scroll listener
    window.addEventListener("scroll", scrollAnimations);

    // Run on page load to account for already visible items
    scrollAnimations();
});

// Open Modal with Fade-In Effect
function educationOpenModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Ensure it's visible
        modal.classList.add("fade-in");
        modal.classList.remove("fade-out");
    }
}

// Close Modal with Fade-Out Effect
function educationCloseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        setTimeout(() => {
            modal.style.display = "none"; // Hide modal after fade-out completes
        }, 300); // Match the transition duration in CSS
    }
}

// Close Modal When Clicking Outside
window.onclick = function (event) {
    const modals = document.querySelectorAll(".education-modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
};



// Open for the buttons in the grades Academic Modules & Awards

// Data structure to hold all modules
const allModules = {
    // You can use the data-year attributes from the HTML as keys
    'Year1': {
        gpa: '2.98',
        title: 'First Year Modules',
        modules: [
            { name: 'Introduction to Programming', grade: 'B' },
            { name: 'Mathematics for Computing', grade: 'A' },
            { name: 'Computer Networks I', grade: 'B' },
            { name: 'Foundations of IT', grade: 'B-' },
            { name: 'Interactive Media', grade: 'B-' },
            { name: 'DataBases implementation', grade: 'A' },
            { name: 'Architecture Computer Hardware', grade: 'B+' },
            { name: 'Introduction to Web Development', grade: 'B' },
            { name: 'Systems Interactive', grade: 'B+' },
            { name: 'Networks & Switching implementation', grade: 'C' },
            // ... more year 1 modules
        ]
    },
    'Year2': {
        gpa: '3.01',
        title: 'Second Year Modules',
        modules: [
            { name: 'Advanced Programming', grade: 'B+' },
            { name: 'Database Systems Advanced', grade: 'A' },
            { name: 'Computer Networks II', grade: 'B' },
            { name: 'Applicied Machine Learning', grade: 'B+' },
            { name: 'Data Analysis', grade: 'B+' },
            { name: 'User Experience Design', grade: 'B+' },
            // ... more year 2 modules
        ]
    },
    'Year3': {
        gpa: '2.93',
        title: 'Third Year Modules',
        modules: [
            { name: 'Server-side Web Development', grade: 'B+' },
            { name: 'Operating Systems', grade: 'C+' },
            { name: 'Cloud Service & Distributed Computing', grade: 'B' },
            { name: 'Big Data Technologies', grade: 'A' },
            { name: 'Applicied Machine Learning', grade: 'B+' },
            { name: 'Advanced Routing & Switching', grade: 'C' },
            { name: 'Project',                      grade: 'A' },
            { name: 'Internship Programme', grade: '30 Credits' }, // Special case for non-grade item
        ]
    },
    'Year4': {
        gpa: '2.96',
        title: 'Final Year Modules',
        modules: [
            { name: 'Project', grade: 'B+' },
            { name: 'Cyber Security For Cloud and IoT', grade: 'B' },
            { name: 'AI & Machine Learning', grade: 'B+' },
            { name: 'Enterprise Performance Architecture', grade: 'B' },
            { name: 'DevOps - Continuous Integration - Azure Pipeline', grade: 'B+' },
            { name: 'IT Governance And Quality', grade: 'B' },
            { name: 'Advanced Cloud Provisioning and Networks', grade: 'C' },
            { name: 'Cloud Architecture AWS', grade: 'B+' },
            { name: 'Private Cloud Architecture', grade: 'C' },
            { name: 'Interactive Media Design & Visualization', grade: 'A' },
            // ... more year 4 modules 
        ]
    }
};


// General Modal Functions
function openAppModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        // Use a timeout to ensure the 'display: block' is processed before adding the fade-in class
        setTimeout(() => {
            modal.classList.remove("fade-out");
            modal.classList.add("fade-in");
        }, 10);
    }
}

function closeAppModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        // Hide modal after fade-out completes (match CSS transition duration)
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); 
    }
}


// Function to Populate and Open the Module Modal
function displayModules(yearKey) {
    const data = allModules[yearKey];
    const titleElement = document.getElementById('modalTitle');
    const gpaElement = document.getElementById('gpaDisplay');
    const listElement = document.getElementById('moduleList');
    
    if (!data) return; // Exit if data not found
    if (!titleElement || !gpaElement || !listElement) return; // Exit if DOM elements missing

    // Update Modal Content
    titleElement.textContent = data.title;
    gpaElement.textContent = `GPA: ${data.gpa}`;
    listElement.innerHTML = ''; // Clear previous list

    // Populate Module List
    data.modules.forEach(module => {
        const li = document.createElement('li');
        const gradeClass = module.grade.startsWith('A') ? 'grade-a' :
                           module.grade.startsWith('B') ? 'grade-b' :
                           module.grade.startsWith('C') ? 'grade-c' : '';
        
        li.innerHTML = `
            <span>${module.name}</span>
            <span class="module-grade ${gradeClass}">${module.grade}</span>
        `;
        listElement.appendChild(li);
    });

    // Open the single, universal modal
    openAppModal('moduleDetailModal');
}


// Event Listener for Navigation Buttons
document.addEventListener('DOMContentLoaded', () => {
    const yearButtons = document.querySelectorAll('.module-year-btn');
    
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            const yearKey = this.getAttribute('data-year');
            displayModules(yearKey);
            
            // Optional: Update button active state if desired
            yearButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close Modal When Clicking Outside
    window.onclick = function (event) {
        const modal = document.getElementById('moduleDetailModal');
        if (event.target === modal) {
            closeAppModal('moduleDetailModal');
        }
    };

    // Key Escape to Close Modal
    window.addEventListener("keydown", (event) => {
        const modal = document.getElementById('moduleDetailModal');
        if (event.key === "Escape" && modal.style.display === "block") {
            closeAppModal('moduleDetailModal');
        }
    });
});






















// document.addEventListener("DOMContentLoaded", () => {
//     const timelineItems = document.querySelectorAll(".experience-timeline-item");
//     const isInViewport = (element) => {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         );
//     };

//     const activateItem = (item) => {
//         item.classList.add("active");
//     };

//     const deactivateItem = (item) => {
//         item.classList.remove("active");
//     };

//     const handleScrollAnimation = () => {
//         timelineItems.forEach((item) => {
//             if (isInViewport(item)) {
//                 activateItem(item);
//             } else {
//                 deactivateItem(item);
//             }
//         });
//     };

//     // Trigger scroll animation on load and scroll
//     handleScrollAnimation();
//     window.addEventListener("scroll", handleScrollAnimation);
// });



