


// document.addEventListener("DOMContentLoaded", () => {
//     const searchBtn = document.getElementById("searchBtn");
//     const searchInput = document.getElementById("searchInput");
//     const searchNotification = document.getElementById("searchNotification");
//     const searchQuerySpan = document.getElementById("searchQuery");
  
//     // Add event listener for button click
//     if (searchBtn) {
//       searchBtn.addEventListener("click", () => {
//         const query = (searchInput && typeof searchInput.value === "string") ? searchInput.value.trim() : "";
//         if (query) {
//           if (searchQuerySpan) searchQuerySpan.textContent = query;
//           if (searchNotification) {
//             searchNotification.classList.remove("d-none");
//             setTimeout(() => {
//               searchNotification.classList.add("d-none");
//             }, 3000);
//           }
//         } else {
//           alert("Please enter a search term.");
//         }
//       });
//     }




    

//   // Toggle navigation menu
//   const navToggleBtn = document.getElementById("navToggleBtn");
//   const navLine = document.querySelector(".nav-line");
//   const navbarCollapse = document.getElementById("navbarNav");
//   const navItems = document.querySelectorAll(".navbar-nav .nav-item");

//   // Toggle hamburger animation
//   if (navToggleBtn) {
//     navToggleBtn.addEventListener("click", () => {
//       navToggleBtn.classList.toggle("active");
//     });
//   }

//   // When menu opens
//   if (navbarCollapse) {
//     navbarCollapse.addEventListener("shown.bs.collapse", () => {
//       if (navLine) navLine.classList.add("active");
//       navItems.forEach((item, index) => {
//         setTimeout(() => {
//           item.classList.add("fade");
//         }, index * 100);
//       });
//     });

//     // When menu closes
//     navbarCollapse.addEventListener("hidden.bs.collapse", () => {
//       if (navLine) navLine.classList.remove("active");
//       if (navToggleBtn) navToggleBtn.classList.remove("active");
//       navItems.forEach((item) => {
//         item.classList.remove("fade");
//       });
//     });
//   }
// });



document.addEventListener("DOMContentLoaded", () => {
    // --- Navigation Toggle Logic (User's custom animation) ---
    const navToggleBtn = document.getElementById("navToggleBtn");
    const navbarCollapse = document.getElementById("navbarNav");
    // Select all direct nav-items in the menu
    const navItems = navbarCollapse ? navbarCollapse.querySelectorAll(".navbar-nav li") : [];
    
    if (navToggleBtn && navbarCollapse) {
        // Toggle hamburger animation
        navToggleBtn.addEventListener("click", () => {
            navToggleBtn.classList.toggle("active");
        });

        // When menu opens (Bootstrap event)
        navbarCollapse.addEventListener("shown.bs.collapse", () => {
            // Start fade-in animation for each item
            navItems.forEach((item, index) => {
                // Use a slight delay for a staggered effect
                setTimeout(() => {
                    item.classList.add("fade");
                }, index * 100); 
            });
        });

        // When menu closes (Bootstrap event)
        navbarCollapse.addEventListener("hidden.bs.collapse", () => {
            // Ensure hamburger state is correct if closing via clicking outside
            if (navToggleBtn) navToggleBtn.classList.remove("active");
            
            // Remove fade class to reset state for next open
            navItems.forEach((item) => {
                item.classList.remove("fade");
            });
        });
    }

    // --- Search Functionality (No Conflict) ---
    const searchInput = document.getElementById("searchInput");
    const searchExecuteBtn = document.getElementById("searchExecuteBtn");
    const searchNotification = document.getElementById("searchNotification");
    const searchQuerySpan = document.getElementById("searchQuery");
    
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            // 1. Show notification
            searchQuerySpan.textContent = query;
            searchNotification.classList.remove("d-none");
            
            // 2. Hide notification after a delay
            setTimeout(() => {
                searchNotification.classList.add("d-none");
            }, 2500);
            
            // 3. Optional: Scroll to the relevant section based on query (e.g., if query === "Hobbies")
            const targetId = query.toLowerCase();
            const targetElement = document.getElementById(targetId.charAt(0).toUpperCase() + targetId.slice(1));
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Clear search input after successful "search"
                searchInput.value = '';
            } else {
                // If no direct section match, just show the search notification
                console.log(`Searching for general term: ${query}`);
            }
        }
    };

    // Trigger search on button click
    if (searchExecuteBtn) {
        searchExecuteBtn.addEventListener('click', performSearch);
    }

    // Trigger search on Enter key press in the input field
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
                e.preventDefault(); // Prevent form submission
            }
        });
    }
    
    // --- Active Link Tracking (Enhancement) ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    const setActiveLink = () => {
        let current = '';
        // Check each section in the document
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 70; // Adjust for sticky header height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // Remove active class from all and add to the current one
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', setActiveLink);
    // Run on load to set initial active link
    setActiveLink();
});
