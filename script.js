document.addEventListener('DOMContentLoaded', () => {
    const doneButtons = document.querySelectorAll('.done-button');
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
    const dropdown = document.getElementById('pages-dropdown');

    // Add event listener to Done buttons
    doneButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Action completed!');
        });
    });

    // Add event listener to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('.checkboxes input[type="checkbox"]:checked').length;
            alert(`You have selected ${checkedCount} options.`);
        });
    });

    // Add event listener to dropdown
    dropdown.addEventListener('change', () => {
        alert(`You selected ${dropdown.options[dropdown.selectedIndex].text}`);
    });
});
