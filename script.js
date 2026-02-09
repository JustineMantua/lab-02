function sendContact(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const contact = document.getElementById('contact-number').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !contact || !email || !message) {
    alert("Please fill all required fields");
    return;
  }

  const entry = {
    name: document.getElementById("contact-name").value.trim(),
    contact: document.getElementById("contact-number").value.trim(),
    email: document.getElementById("contact-email").value.trim(),
    message: document.getElementById("contact-message").value.trim(),
    date: new Date().toLocaleString()
  };

  const submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

  submissions.push(entry);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  renderTable();
  document.getElementById("contact-form").reset();
}

function renderTable() {
  const tbody = document.getElementById("submissions-table-body");
  const submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

  tbody.innerHTML = "";

  submissions.forEach((s, i) => {
tbody.innerHTML += `
  <tr class="border-b">
    <td class="px-4 py-2">${i+1}</td>
    <td class="px-4 py-2">${s.name}</td>
    <td class="px-4 py-2">${s.contact}</td>
    <td class="px-4 py-2">${s.email}</td>
    <td class="px-4 py-2">${s.message}</td>
    <td class="px-4 py-2">${s.date}</td>
    <td class="px-4 py-2 text-center">
      <button onclick="deleteRow(${i})"
        class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
        Delete
      </button>
    </td>
  </tr>
`;

  });
}

function deleteRow(index) {
  const submissions =
    JSON.parse(localStorage.getItem("submissions")) || [];

  submissions.splice(index, 1);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  renderTable();
}

renderTable();
