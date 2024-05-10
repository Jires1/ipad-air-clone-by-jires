$(document).ready(function() {
    // Initialize variables
    let highestVisibleSection = null;
    let highestVisiblePercentage = 0;
  
    // Calculate visible heights on window scroll
    $(window).on('scroll',function() {
      const sections = $('.section'); // Select all sections
      sections.each(function() {
        const section = $(this);
        const visibleHeight = calculateVisibleHeight(section);
        const visiblePercentage = calculateVisiblePercentage(visibleHeight, section.outerHeight());
  
        // Update highest visible section if current percentage is higher
        if (visiblePercentage > highestVisiblePercentage) {
          highestVisibleSection = section;
          highestVisiblePercentage = visiblePercentage;
        }
      });
    });
  
    // Function to calculate visible height of a section
    function calculateVisibleHeight(section) {
      const sectionTop = section.offset().top;
      const windowTop = $(window).scrollTop();
      const windowBottom = windowTop + $(window).height();
  
      const topVisible = Math.max(0, windowTop - sectionTop);
      const bottomVisible = Math.min(section.outerHeight(), windowBottom - sectionTop);
  
      return topVisible + bottomVisible;
    }
  
    // Function to calculate visible percentage
    function calculateVisiblePercentage(visibleHeight, sectionHeight) {
      return (visibleHeight / sectionHeight) * 100;
    }
  
    // Access the highestVisibleSection and highestVisiblePercentage variables after scrolling
    console.log("Highest visible section:", highestVisibleSection);
    console.log("Highest visible percentage:", highestVisiblePercentage);
  });
  