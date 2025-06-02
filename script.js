document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isNavVisible = nav.style.display === 'block';
        
        if (isNavVisible) {
            nav.style.display = 'none';
            authButtons.style.display = 'none';
        } else {
            nav.style.display = 'block';
            authButtons.style.display = 'flex';
            
            // Position the auth buttons below the nav
            authButtons.style.flexDirection = 'column';
            authButtons.style.gap = '0.5rem';
            authButtons.style.marginTop = '1rem';
            authButtons.style.width = '100%';
            
            // Adjust nav styles for mobile
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.backgroundColor = 'white';
            nav.style.padding = '1.5rem';
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            
            nav.querySelector('ul').style.flexDirection = 'column';
            nav.querySelector('ul').style.gap = '1rem';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Search functionality
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        const searchInput = searchBox.querySelector('input');
        const searchButton = searchBox.querySelector('button');
        
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    
    function performSearch(query) {
        if (query.trim()) {
            alert(`Searching for: ${query}`);
            // In a real implementation, you would redirect to search results or fetch them
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }
    
    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
});

// Hide the markmap section
// ... existing code ...
// Ensure the close button is functional for the new details section
const closeDetailsBtn = document.getElementById('close-details-btn');
if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener('click', function() {
        const nodeDetailsSection = document.getElementById('node-details-section');
        const nodeDetailsTitle = document.getElementById('node-details-title');
        const nodeDetailsContent = document.getElementById('node-details-content');
        if (nodeDetailsSection) {
            nodeDetailsSection.style.display = 'none'; // Hide the details section
            if (nodeDetailsTitle) nodeDetailsTitle.textContent = ''; // Clear content
            if (nodeDetailsContent) nodeDetailsContent.textContent = '';
        }
    });
}

// Add click event listeners to roadmap diagram nodes
const roadmapNodes = document.querySelectorAll('.roadmap-diagram .node');
roadmapNodes.forEach(node => {
    node.addEventListener('click', function() {
        const nodeDetailsSection = document.getElementById('node-details-section');
        const nodeDetailsTitle = document.getElementById('node-details-title');
        const nodeDetailsContent = document.getElementById('node-details-content');

        // Remove highlight from previously selected nodes
        document.querySelectorAll('.roadmap-diagram .node.highlighted').forEach(highlightedNode => {
            highlightedNode.classList.remove('highlighted');
        });

        // Add highlight to the clicked node
        this.classList.add('highlighted');

        if (nodeDetailsSection && nodeDetailsTitle && nodeDetailsContent) {
            const nodeText = this.textContent.trim();
            nodeDetailsTitle.textContent = nodeText;
            // For now, we'll just display the node text as content
            nodeDetailsContent.textContent = 'Details for: ' + nodeText; // Placeholder content
            nodeDetailsSection.style.display = 'block';
        }
    });
});

// Add click event listeners to roadmap list items on roadmaps.html
const roadmapListItems = document.querySelectorAll('.roadmap-list li');

roadmapListItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove highlight from previously selected items
        document.querySelectorAll('.roadmap-list li.highlighted').forEach(highlightedItem => {
            highlightedItem.classList.remove('highlighted');
        });

        // Add highlight to the clicked item
        this.classList.add('highlighted');

        // Note: We are not adding a details section for the roadmap list items 
        // as they link to separate pages.
    });
});

// --- Removed old Markmap and static grid logic ---
// Removed showMindMap function
// Removed closeMindMap function
// Removed old viewRoadmapButtons event listener
// Removed old search suggestions logic based on markdown scripts