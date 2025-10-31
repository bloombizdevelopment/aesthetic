// sendToWhatsApp.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const appointmentForm = document.getElementById("appointmentForm");
  
    // Add form submission handler
    appointmentForm.addEventListener("submit", sendToWhatsApp);
  
    function validateForm() {
      const required = [
        "name",
        "email",
        "location",
        "recordno",
        "date",
        "choosetime",
      ];
      const errors = [];
  
      required.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
          errors.push(
            `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required`
          );
        }
      });
  
      // Basic email validation
      const email = document.getElementById("email").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address");
      }
  
      return errors;
    }
  
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  
    // Function to detect if user is on mobile
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  
    function sendToWhatsApp(event) {
      event.preventDefault();
  
      // Validate form
      const errors = validateForm();
      if (errors.length > 0) {
        alert("Please fix the following errors:\n" + errors.join("\n"));
        return;
      }
  
      try {
        // Get all form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const location = document.getElementById("location").value.trim();
        const recordno = document.getElementById("recordno").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("choosetime").value;
        const reason = document.querySelector(
          'input[name="your-sports"]:checked'
        ).value;
  
        // Format the message with proper encoding
        const message = encodeURIComponent(
          `*New Appointment Request*\n` +
            `------------------\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Location: ${location}\n` +
            `Mobile No: ${recordno}\n` +
            `Date: ${formatDate(date)}\n` +
            `Time: ${time}\n` +
            `Reason for Visit: ${reason}`
        );
  
        const phoneNumber = "917907889370";
        
        // Choose URL based on device type
        const whatsappURL = isMobileDevice()
          ? `https://wa.me/${phoneNumber}?text=${message}`
          : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        
        // Open WhatsApp
        window.open(whatsappURL, "_blank");
  
        // Reset form after successful submission
        appointmentForm.reset();
      } catch (error) {
        console.error("Error sending to WhatsApp:", error);
        alert(
          "There was an error processing your appointment. Please try again."
        );
      }
    }
  });