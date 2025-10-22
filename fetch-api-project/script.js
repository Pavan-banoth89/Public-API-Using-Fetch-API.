document.getElementById('fetchBtn').addEventListener('click', fetchUsers);

async function fetchUsers() {
  const container = document.getElementById('user-container');
  container.innerHTML = '<p style="text-align:center; color:white;">Fetching user data...</p>';

  try {
    const response = await fetch('users.json');
    const users = await response.json();

    container.innerHTML = ''; // Clear previous content

    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>Company:</strong> ${user.company}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color:red; text-align:center;">Failed to load user data. Try again later.</p>`;
    console.error('Error fetching users:', error);
  }
}
