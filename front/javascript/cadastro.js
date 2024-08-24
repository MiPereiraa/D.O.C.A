let button = document.getElementById("handleSubmit");
 
button.onclick = function(e) {
    e.preventDefault();
 
    let email = document.getElementById('email').value;  
    let nome = document.getElementById('nome').value;  
    let telefone = document.getElementById('telefone').value;  
    let senha = document.getElementById('senha').value;  
 
    let data = { email, nome, telefone, senha };
 
    console.log("Dados que serão enviados:", data);
 
    try {
        const response = await fetch('http://localhost:3000/api/store/user', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });
 
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
 
        let content = await response.json();
 
        if (content.success) {
            alert("Sucesso");
           
            // localStorage.setItem('id_user', content.data.id_user);
            // console.log(`ID do usuário armazenado: ${content.data.id_user}`);
            //     if (tipo_usuario == 'Instituição') {
            //         window.location.href = "/front/html/perfil_insti.html";
            //     }
 
        } else {
            alert("Erro ao cadastrar. Vefique os dados inseridos ou se você já possui uma conta.");
        }
 
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        alert("Erro ao enviar a requisição.");
    }
};