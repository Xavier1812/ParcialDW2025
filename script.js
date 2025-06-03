// Cambiar tema
document.getElementById("cambiarTema").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Validar formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const carrera = document.getElementById("carrera").value.trim();

  if (!nombre || !correo || !carrera) {
    alert("Por favor, completa todos los campos.");
    e.preventDefault();
  }
});

// Mostrar participantes aleatorios
fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("lista-participantes");
    data.results.forEach(user => {
      const div = document.createElement("div");
      div.className = "participante";
      div.innerHTML = `
        <img src="${user.picture.medium}" alt="Foto de ${user.name.first}" />
        <p>${user.name.first} ${user.name.last}</p>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error("Error cargando participantes:", error));
