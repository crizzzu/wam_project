<template>
  <body>
    <header>
      <nav>
            <div class="logo-container">
                <img src="../assets/logo1.png" alt="postIt">
            </div>
            <div class="search-container">
                <input type="text" name="search"><button type="button">Search</button>
            </div>
            <div class="avatar-container">
                <img id="avatar-img" @click="toggle" v-bind:src=allUsers.avatar>
                <div class="drop-down-container" v-show="isOpen">
                    <span id="user-name">{{allUsers.firstname}} {{allUsers.lastname}}</span>
                    <span id="user-email">{{allUsers.email}}</span>
                    <span class="separator"></span>
                    <span>
                        <router-link to="/browse">Browse</router-link>
                    </span>
                    <span class="separator"></span>
                    <span>
                        <router-link to="/login">Log Out</router-link>
                    </span>
                </div>
            </div>
        </nav>
    </header>

    <div class="main-container" >
            <li v-for="(post, index) in allPosts" :key="index">
                <div class="post">
                    <div class="post-author">
                        <span class="post-author-info">
                            <img v-bind:src="post.author.avatar">
                            <small>{{post.author.firstname}}  {{post.author.lastname}}</small>
                        </span>
                        <small id="createTime">{{post.createTime}}</small>
                    </div>
                    <div class="post-image">
                            <img v-if="post.media" v-bind:src="post.media.url" alt="">
                    </div>
                        <div class="post-title">
                          <h3>{{post.text}}</h3>
                        </div>
                        <div class="post-actions">
                          <button id="like-button" :style="{'background-color': clickedColor}" v-on:click="colorChange">{{post.likes}}</button>
                        </div>
                </div>
            </li>
        </div>
  </body>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
      name: 'Index',
      data() {
        return {
          isOpen: true,
          clickedColor: '',
          alteredState: true
      }},
      computed: {
        ...mapGetters(['allPosts']),
        ...mapGetters(['allUsers'])
      },
      methods: {
        ...mapActions(['loadPosts']),
        ...mapActions(['loadUsersData']),

        colorChange: function() {
          console.log(this.alteredState);

          if (this.alteredState) {
            this.clickedColor = 'blue'
          } else {
            this.clickedColor = '#8a8a8a'
          }
          // this is toggle function, so it's OK to
          // toggle the state every time the button is clicked
          this.alteredState = !this.alteredState
        },

        toggle: function () {
          this.isOpen = !this.isOpen;
        },
        show: function () {
          this.isOpen = true;
        },
        hide: function () {
          this.isOpen = false;
        }
      },
        created() {
          this.loadPosts();
          this.loadUsersData();
          this.toggle();
        }
      }
</script>
<style scoped>

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
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

    nav div {
      height: 30px;
      flex-grow: 4;
      padding: 10px;
    }

    nav div img {
      height: 100%;
      width: 30px;
      margin-left: 15px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top center;
    }

    nav div.search-container > input {
      box-sizing: border-box;
      height: 30px;
      width: 80%;
      margin: 0;
      padding: 5px;
      border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
      height: 30px;
      width: 20%;
      margin: 0;
      padding: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      position: relative;
    }

    nav div.avatar-container {
      margin-right: 15px;
      text-align: right;
      position: relative;
    }

span{
  display: block;
}

    .main-container {
      width: 50%;
      min-height: 100%;
      margin: auto auto;
      padding: 90px 15px 15px 15px;
      background-color: #ffffff;
    }

    .post {
      width: 80%;
      margin: 15px auto;
      box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
      border-radius: 5px;
    }

    .post .post-author {
      padding: 10px;
    }

    .post .post-author::after {
      content: "";
      display: block;
      clear: both;
    }

    .post .post-author .post-author-info {
      float: left;
      position: relative;
      width: 50%;
    }

    .post .post-author .post-author-info img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top;
      margin: 5px;
    }

    .post .post-author .post-author-info small {
      position: absolute;
      top: 10px;
      left: 35px;
    }

    .post .post-author .post-author-info + small {
      float: right;
      color: grey;
      padding: 10px;
    }

    .post .post-image img, video {
      width: 100%;
      min-height: 150px;
      max-height: 350px;
      object-fit: cover;
      object-position: top center;
    }

    .post .post-title {
      padding: 10px;
    }

    .post .post-title h3 {
      display: inline;
    }

    .post .post-title ~ .post-actions {
      padding: 10px;
    }

    li {
        position: relative;
        list-style-type: none;
    }

    #like-button {
        background-image: url("../assets/like.png");
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: 5px center;
        background-color: #8a8a8a;
        width: 60px;
        height: 25px;
        padding-left: 23px;
        line-height: 10px;
        text-align: left;
        border: none;
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