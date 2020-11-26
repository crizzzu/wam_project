<template>
  <body>
  <header>
    <nav>
        <div class="register-page">
                <div>
                    <div class="registration">
                    <h3>Registration</h3>
                        <div>
                            <input required type="text" name="firstname" placeholder="First name">
                            <div>
                                <input required type="text" name="lastname" placeholder="Lastname">
                                <div>
                                    <input required type="text" name="email" placeholder="Email">
                                <div>
                                    <input required type="password" name="password"  placeholder="Password">
                                </div>
                                </div>
                                <div>
                                <router-link to="/browse" tag="button">Register</router-link>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </nav>
  </header>
  </body>
</template>

<script>
    export default {
        name: "Register",
        data() {}
        }
</script>

<style scoped>
* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    .register-page{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: #263238;
        text-align: center;
        position: relative;
    }

    .registration{
        margin: 15px auto;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        border-radius: 5px;
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
        float: left;
        position: relative;
        padding: 10px;
    }

    button {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;
    }

    input {
        position:relative;
    }
</style>