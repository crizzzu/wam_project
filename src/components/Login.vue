<template>
    <div class="login-page">
        <div id="login-container">
            <h3>Welcome to postIt!</h3>
            <div>
                <h4>
                    <router-link to="/register" >Create an Account</router-link>
                </h4>
                <div>
                    <h4>Or</h4>
                    <div>
                        <h3>Please Log In</h3>
                        <form action="index.vue" method="post">
                            <input required type="text" name="email" placeholder="Email">
                            <div>
                                <input required type="password" name="password"  placeholder="Password">
                                <div>
                                    <router-link to="/browse" tag="button">Log In</router-link>
                                    <div>
                                        <small>
                                            <a href="#">Forgot password?</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {}
    }
</script>
<style scoped>
      .login-page {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0277bd;
          color: #263238;
          text-align: center;
      }

    #login-container {
        background-image: url("../assets/logo1.png");
        background-position: 3% 3%;
        background-size: 80px;
        imagemin-width: 20%;
        background-repeat: no-repeat;
        padding: 20px 20px;
        background-color: #ffffff;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        text-align: center;
        width: 400px;

    }

    button {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;
    }

</style>