document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dobInput = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    if (!dobInput) {
        resultDiv.textContent = "Please enter a valid date.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;

});