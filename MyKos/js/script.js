// Script JS Admin Profile=======================================
// Get the "Edit" text element
const editText = document.getElementById("text-edit-nav-item");

// Get all the textareas
const textareas = document.querySelectorAll("#isi-di-admin-profile");

// Add click event listener to the "Edit" text
editText.addEventListener("click", function () {
    // Toggle the disabled attribute and background color for each textarea
    textareas.forEach((textarea) => {
    textarea.disabled = !textarea.disabled;
    textarea.style.backgroundColor = textarea.disabled ? "transparent" : "#f4f4f4";
  });

  // Toggle the text of the "Edit" text
  editText.textContent = editText.textContent === "Edit" ? "Done" : "Edit";
});

// Script JS Detail Tamu=====================================

const editText2 = document.getElementById("text-edit-nav-item-2");
const textareas2 = document.querySelectorAll("#isi-di-detail-tamu");
const textareaSpecial = document.getElementById("isi-di-detail-tamu-SP");
const h3 = document.getElementById("teks-kamar103");

// Add click event listener to the "Edit" text
editText.addEventListener("click", function () {
    // Toggle the disabled attribute and background color for each textarea
    textareas2.forEach((textarea) => {
    textarea.disabled = !textarea.disabled;
    textarea.style.backgroundColor = textarea.disabled ? "transparent" : "#f4f4f4";
  
    textareaSpecial.disabled = !textareaSpecial.disabled;
    textareaSpecial.style.backgroundColor = textareaSpecial.disabled ? "transparent" : "#f4f4f4";
  });

  // Toggle the text of the "Edit" text
  editText2.textContent = editText2.textContent === "Edit" ? "Done" : "Edit";
});

textareaSpecial.addEventListener('input', function() {
  // Update the h3 text with the textarea's current value
  h3.textContent = textareaSpecial.value;
});