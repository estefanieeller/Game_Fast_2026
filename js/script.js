document.addEventListener("DOMContentLoaded", () => {
  // Marca automaticamente como ativa a página atual no menu.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar .nav-link:not(.dropdown-toggle)").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Fecha o menu mobile após navegar por um link.
  document.querySelectorAll("#menuPrincipal .nav-link, #menuPrincipal .dropdown-item").forEach(link => {
    link.addEventListener("click", () => {
      const collapseElement = document.getElementById("menuPrincipal");
      if (collapseElement && collapseElement.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(collapseElement).hide();
      }
    });
  });

  // Formulário de contato: comportamento front-end, sem backend.
  const formContato = document.getElementById("form-contato");
  const msgSucesso = document.getElementById("mensagem-sucesso");

  if (formContato && msgSucesso) {
    formContato.addEventListener("submit", event => {
      event.preventDefault();
      msgSucesso.classList.remove("d-none");
      formContato.reset();

      window.setTimeout(() => {
        msgSucesso.classList.add("d-none");
      }, 5000);
    });
  }
});
