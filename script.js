document.addEventListener('DOMContentLoaded', () => {
    const doneButtons = document.querySelectorAll('.done-button');
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
    const dropdown = document.getElementById('pages-dropdown');
    const dropdownDoneButton = document.getElementById('dropdown-done');

    // Add event listener to Done buttons
    doneButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`Done button ${index + 1} clicked!`);
        });
    });

    // Add event listener to checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked').length;
            alert(`You have selected ${checkedCount} options.`);
        });
    });

    // Add event listener to dropdown
    dropdown.addEventListener('change', () => {
        alert(`You selected ${dropdown.options[dropdown.selectedIndex].text}`);
    });

    // Add event listener to dropdown Done button
    dropdownDoneButton.addEventListener('click', () => {
        alert(`Dropdown Done button clicked! Selected: ${dropdown.options[dropdown.selectedIndex].text}`);
    });
});
