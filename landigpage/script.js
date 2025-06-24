document.addEventListener("DOMContentLoaded", () => {
  
  // Seu código atual dos links
 document.querySelectorAll('a[href*="freelance_oficial"], a[href*="plano_de_negocios.pdf"], a[href*="relatorio_pn.pdf"]').forEach(link => {
    link.innerHTML += ' <span class="arrow">→</span>';
    
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
      link.style.boxShadow = '0 5px 10px rgba(0,0,0,0.2)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
      link.style.boxShadow = '';
    });
  });

  // Smooth scrolling
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Código do formulário
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "Erro ao enviar. Tente novamente.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "Erro na conexão. Tente novamente.";
      status.style.color = "red";
    }
  });
});

