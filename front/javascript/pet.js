document.getElementById('upload-photo').addEventListener('change', function() {
    const file = this.files[0]; // Obtém o arquivo selecionado pelo usuário
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('pet-photo').setAttribute('src', e.target.result); // Atualiza a imagem do pet
        }
        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
});

function addVaccine() {
    const vaccineInput = document.getElementById('vaccine-input'); // Obtém o elemento de entrada para vacinas
    const vaccineTags = document.getElementById('vaccine-tags'); // Obtém o contêiner para as tags de vacina
    const vaccine = vaccineInput.value.trim(); // Obtém e limpa o valor da entrada
    if (vaccine) {
        const tag = document.createElement('div'); // Cria um novo elemento de tag
        tag.className = 'tag'; // Adiciona a classe 'tag' ao elemento
        tag.innerHTML = `${vaccine} <span onclick="removeTag(this)">x</span>`; // Define o conteúdo HTML da tag, incluindo um botão de remoção
        vaccineTags.appendChild(tag); // Adiciona a nova tag ao contêiner de tags de vacina
        vaccineInput.value = ''; // Limpa a entrada
    }
}

function addAppointment() {
    const appointmentInput = document.getElementById('appointment-input'); // Obtém o elemento de entrada para consultas marcadas
    const appointmentTags = document.getElementById('appointment-tags'); // Obtém o contêiner para as tags de consultas marcadas
    const appointment = appointmentInput.value.trim(); // Obtém e limpa o valor da entrada
    if (appointment) {
        const tag = document.createElement('div'); // Cria um novo elemento de tag
        tag.className = 'tag'; // Adiciona a classe 'tag' ao elemento
        tag.innerHTML = `${appointment} <span onclick="removeTag(this)">x</span>`; // Define o conteúdo HTML da tag, incluindo um botão de remoção
        appointmentTags.appendChild(tag); // Adiciona a nova tag ao contêiner de tags de consultas marcadas
        appointmentInput.value = ''; // Limpa a entrada
    }
}

function removeTag(element) {
    element.parentNode.remove(); // Remove a tag pai do botão de remoção
}

