<template>
  <div class="register-screen">
  <h1 class="title">Inscription</h1>
    <form @submit.prevent="register" class="register-form">
      <div class="form-group">
      <div>
        <label for="username">Nom d'utilisateur</label>
        <input type="text" v-model="username" id="username" placeholder="Nom d'utilisateur" class="form-control" />
      </div>
      <div>
        <label for="email">Adresse e-mail</label>
        <input type="email" v-model="email" id="email" placeholder="Adresse e-mail" class="form-control" />
      </div>
      <div >
        <label for="confirmEmail">Confirmer adresse e-mail</label>
        <input type="email" v-model="confirmEmail" id="confirmEmail" placeholder="Confirmer adresse e-mail" class="form-control" />
      </div>
      <div >
      <label for="password">Mot de passe</label>
      <div class="password-container">
      <input :type="passwordType" v-model="password" id="password" placeholder="Mot de passe" class="form-control" />
      <button type="button" @click="togglePassword" class="btn-secondary">
        <i :class="passwordIcon"></i>
      </button>
    </div>
    </div>
    <div >
      <label for="confirmPassword">Confirmer mot de passe</label>
    <div class="password-container">
      <input :type="confirmPasswordType" v-model="confirmPassword" id="confirmPassword" placeholder="Confirmer mot de passe" class="form-control" />
      <button type="button" @click="toggleConfirmPassword" class=" btn-secondary">
        <i :class="confirmPasswordIcon"></i>
      </button>
    </div>
    </div>
    
      <button type="submit" class="btn btn-primary">S'inscrire</button>
      <p v-if="registrationMessage" class="registration-message">{{ registrationMessage }}</p>
    </div>
    </form>
  </div>
</template>

<script>
export default {
data() {
  return {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    registrationMessage: '',
    passwordType: 'password',
    confirmPasswordType: 'password',
    passwordIcon: 'fa fa-eye-slash',
    confirmPasswordIcon: 'fa fa-eye-slash',
    };
},
methods: {
  
  register() {
    if (this.email!== this.confirmEmail) {
      alert('Les adresses e-mail ne correspondent pas');
      return;
    }
    if (this.password!== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
     .then((res) => res.json())
     .then((res) => {
        if (res.jwt) {
          // stocker le token dans le local storage
          localStorage.setItem('token', res.jwt);
          // rediriger vers la page d'accueil
          this.registrationMessage = 'Inscription réussie! Vous allez être redirigé vers la page d\'accueil.';
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
          this.$router.push('/');
        } else {
          console.error('Erreur d\'inscription');
        }
      })
     .catch((err) => console.error(err));
  },
  resetForm() {
    this.username = '';
    this.email = '';
    this.confirmEmail = '';
    this.password = '';
    this.confirmPassword = '';
    this.registrationMessage = '';
  },
  togglePassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'fa fa-eye';
      } else {
      this.passwordType = 'password';
      this.passwordIcon = 'fa fa-eye-slash';
      }
  },
  toggleConfirmPassword() {
    if (this.confirmPasswordType === 'password') {
      this.confirmPasswordType = 'text';
      this.confirmPasswordIcon = 'fa fa-eye';
      } else {
      this.confirmPasswordType = 'password';
      this.confirmPasswordIcon = 'fa fa-eye-slash';
      }
  },
},
};
</script>

  <style scoped>
  .register-screen {
    min-height: 100vh;
    background-color: #f7f7f7;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .register-form {
    width: 80%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 90%;
    margin: auto;
    padding: 10px;
  }
  
  .form-control {
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
  }

  .btn:hover {
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
    transform: scale(1.02) translateY(-4px);
  }

  .btn-secondary {
    width: 20%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    background-color: #a2aaa2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .registration-message {
    font-size: 16px;
    color: #4CAF50;
    margin-top: 20px;
  }
  .password-container {
  display: flex;
  align-items: center;
}

.password-icon {
  margin-left: 20px;
  
}
  </style>