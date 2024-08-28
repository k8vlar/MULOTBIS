<template>
  <div class="login-screen">
    <h1 class="title">Connexion</h1>
    <div>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <div>
            <input v-model="email" id="email" placeholder="Email" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <div class="password-container">
            <input :type="passwordType" v-model="password" id="password" placeholder="Mot de passe" class="form-control" />
            <button type="button" @click="togglePassword" class="btn-secondary">
              <i :class="passwordIcon"></i>
            </button>
          </div>
        </div>
        <button type="submit" class="btn-login">Se connecter</button>
        <button @click="logout" class="btn-logout">Se déconnecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordType: 'password',
      passwordIcon: 'fa fa-eye-slash',
    };
  },
  methods: {
    login() {
      const data = {
        identifier: this.email,
        password: this.password,
      };
      fetch('http://localhost:1337/api/auth/local', {
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
            // réinitialiser les valeurs des champs de connexion
            this.resetForm();
            // rediriger vers la page d'accueil
            this.$router.push('/');
          } else {
            console.error('Erreur de connexion');
          }
        })
        .catch((err) => console.error(err));
    },
    logout() {
      // supprimer le token du local storage
      localStorage.removeItem('token');
      // réinitialiser les valeurs des champs de connexion
      this.resetForm();
      // rediriger vers la page de connexion
      this.$router.push('/login');
    },
    resetForm() {
      this.email = '';
      this.password = '';
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
  },
};
</script>

<style scoped>
.login-screen {
  min-height: 40vh;
  background-color: #f7f7f7;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-login {
  width: 80%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.btn-login:hover {
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
  transform: scale(1.02) translateY(-4px);
}

.btn-logout {
  width: 80%;
  padding: 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.btn-logout:hover {
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
  transform: scale(1.02) translateY(-4px);
}

@media (min-width: 1024px) {
  .login-screen {
    flex-direction: row;
    justify-content: space-around;
  }
  .login-form {
    width: 100%;
  }
}
.password-container {
  display: flex;
  align-items: center;
}

.password-icon {
  margin-left: 20px;
}
</style>