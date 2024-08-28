<template>
  <div class="contact-page">
    <h1>Formulaire de contact</h1>
    <form @submit.prevent="envoyerFormulaire" class="contact-form">
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" v-model="prenom" placeholder="Prénom" id="prenom" class="form-control">
      </div>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" v-model="nom" placeholder="Nom" id="nom" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="message" placeholder="Message" id="message" class="form-message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
  <div v-show="reponse" class="response-message" :class="{ 'success': isSuccess, 'error': isError }">
    {{ reponse }}
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      prenom: '',
      nom: '',
      email: '',
      message: '',
      reponse: '', // variable pour stocker la réponse
      isSuccess: false,
      isError: false
    }
  },
  methods: {
    envoyerFormulaire() {
      fetch('http://localhost:1337/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            prenom: this.prenom,
            nom: this.nom,
            email: this.email,
            message: this.message
          }
        })
      })
        .then(reponse => {
          if (reponse.ok) {
            return reponse.json();
          } else {
            throw new Error('Erreur lors de l\'envoi du formulaire');
          }
        })
        .then(data => {
          console.log('API response:', data);
          this.reponse = 'Message envoyé avec succès !';
          this.isSuccess = true;
          this.isError = false;
        })
        .catch(erreur => {
          console.error(erreur);
          this.reponse = 'Erreur lors de l\'envoi du formulaire';
          this.isSuccess = false;
          this.isError = true;
        });

    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
}

.form-message{
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
 
}

.form-control:focus {
  border-color: #aaa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

label {
  display: block;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

.response-message {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.success {
  background-color: #dff0d8;
  border-color: #8bc34a;
}
</style>
 