AOS.init();


function modalClick(id) {
    let title = document.getElementById("modal_title");
    let body = document.getElementById("modal_body");
 
    if (id === "grow_i2e") {
      title.innerHTML = "Grow with I2E";
      body.innerHTML =
        "Drive sustainable business growth with our tailored strategies, market analysis, and targeted marketing campaigns - unlock your business's full potential today!";
    } else if (id === "Startup_i2e") {
      title.innerHTML = "StartUp with I2E";
      body.innerHTML =
        "Launch your startup confidently with our end-to-end solutions, covering business registration, branding, website development, and expert mentorship - turn your entrepreneurial dreams into reality.";
    } else if (id === "Validate_i2e") {
      title.innerHTML = "Validate with I2E";
      body.innerHTML =
        "Validate your business idea with expert market research, mentorship, and rigorous validation process - make informed decisions and set a solid foundation for success.";
    } else if (id === "doc_i2e") {
      title.innerHTML = "Documentation with I2E";
      body.innerHTML =
        "Simplify your business registration process with our expert assistance and streamlined documentation services - focus on your core activities while we handle the paperwork.";
    } else if (id === "ie_i2e") {
      title.innerHTML = "Import/Export with I2E";
      body.innerHTML =
        "Expand your business globally with our comprehensive import/export services, including market analysis, supply chain optimization, and international trade expertise - unlock new growth opportunities in the global marketplace.";
    }
  }
 
  function toggleContent(targetId, button) {
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display =
        targetContent.style.display === "block" ? "none" : "block";
      button.textContent = targetContent.style.display === "none" ? "+" : "-";
    }
  }
  function setupExpandToggle() {
    const expandButtonElements = document.querySelectorAll(".collapsible_div");
    expandButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        toggleContent(targetId, button);
      });
    });
  }

function initializeContactButtons() {
    const contactButtons = document.querySelectorAll('.contact_button');
    const privacyStatus = document.querySelectorAll('.privacy_status');

    contactButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const userName = button.getAttribute('data-user');
            const isPrivate = privacyStatus[index].textContent === 'Private';

            if (isPrivate) {
                // User's portfolio is private, allow recruiter to contact
                const confirmation = confirm(`Do you want to allow recruiter to contact ${userName}?`);
                if (confirmation) {
                    alert(`You allowed recruiter to contact ${userName}`);
                } else {
                    alert(`You denied access to the recruiter for contacting ${userName}`);
                }
            } else {
                alert(`Recruiter can view and contact ${userName}`);
            }
        });
    });
}




 
