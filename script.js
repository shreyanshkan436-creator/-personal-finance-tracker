let total = 0;

function addExpense() {

    const name = document.getElementById("expenseName").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);

    if(name === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - ₹${amount}`;

    document.getElementById("expenseList").appendChild(li);

    total += amount;

    document.getElementById("total").textContent = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
