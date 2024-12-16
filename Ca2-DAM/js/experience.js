
// Experience Timeline

document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".experience-timeline-item");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const activateItem = (item) => {
        item.classList.add("active");
    };

    const deactivateItem = (item) => {
        item.classList.remove("active");
    };

    const handleScrollAnimation = () => {
        timelineItems.forEach((item) => {
            if (isInViewport(item)) {
                activateItem(item);
            } else {
                deactivateItem(item);
            }
        });
    };

    // Trigger scroll animation on load and scroll
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);
});



