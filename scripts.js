// Função para rolagem suave para as seções
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Lógica para o menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        menuToggle.classList.toggle('rotate');
    });

    // Fecha o menu quando um link é clicado
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                menuToggle.classList.remove('rotate');
            }
        });
    });
}

// Configuração do link do WhatsApp
const whatsappPhoneNumber = '556799385046'; // SUBSTITUA PELO SEU NÚMERO COM CÓDIGO DO PAÍS E DDD
const whatsappMessageBase = 'Olá, sou [Nome] e gostaria de mais informações sobre os serviços da Clínica Allegra.';

// Botão WhatsApp na Hero
const whatsappHeroBtn = document.getElementById('whatsapp-hero-btn');
if (whatsappHeroBtn) {
    whatsappHeroBtn.href = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessageBase.replace('[Nome]', ''))}`;
}

// Botão WhatsApp na Seção de Contato
const whatsappLinkOnly = document.getElementById('whatsapp-link-only');
if (whatsappLinkOnly) {
    whatsappLinkOnly.href = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessageBase.replace('[Nome]', ''))}`;
}

// Botão Flutuante WhatsApp
const whatsappFloatButton = document.createElement('a');
whatsappFloatButton.id = 'whatsapp-float-button';
whatsappFloatButton.classList.add('whatsapp-float-button');
whatsappFloatButton.href = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessageBase.replace('[Nome]', ''))}`;
whatsappFloatButton.target = '_blank';
whatsappFloatButton.innerHTML = '<img src="whatsapp-logo.svg" alt="WhatsApp">';

document.body.appendChild(whatsappFloatButton);

// Adiciona evento para atualizar a mensagem base se o nome for preenchido em um formulário futuro
// Neste caso, como não há formulário, a mensagem base fica fixa.