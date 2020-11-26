<template>
  <body>
  <header>
            <nav>
                <div class="logo-container">
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
                        <router-link to="/index">Index</router-link>
                        </span>
                        <span class="separator"></span>
                        <span>
                        <router-link to="/login">Log Out</router-link>
                        </span>
                    </div>
                </div>
            </nav>
  </header>
  <div class="main-container">
  <div class="profile">
                <li  v-for="(profile, ix) in allProfiles" :key="ix">
                    <img v-bind:src="profile.avatar" alt="John Doe">
                    <h2>{{profile.firstname}} {{profile.lastname}}</h2>
                    <button class="follow-button" :style="{'background-color': clickedColor, 'border': '2px solid purple', 'color': textColor}" v-on:click="colorChange">{{clickedText}}</button>
                </li>
            </div>
  </div>

  </body>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Browse',
      data() {
          return {
            isOpen: true,
            textColor: 'white',
            clickedColor: 'purple',
            clickedText: 'Follow',
            alteredState: true
          }
      },
        computed:  {
            ...mapGetters(['allProfiles']),
            ...mapGetters(['allUsers'])
        },

        methods: {
            ...mapActions(['loadProfilesData']),
            ...mapActions(['loadUsersData']),

          colorChange: function() {
            console.log(this.alteredState);

            if (this.alteredState) {
              this.clickedColor = 'purple'
              this.clickedText = "Follow"
              this.textColor = 'white'
            } else {
              this.clickedColor = 'white'
              this.clickedText = "Following"
              this.textColor = 'purple'
            }
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
            },
            clickOn: function () {
                if (this.clicked == "Follow") {
                    this.clicked = "Following"}
                else {
                    this.clicked = "Follow"
                }

            }
        },
        created() {
            this.loadProfilesData();
            this.loadUsersData();
            this.toggle();
            this.clickOn();
            this.colorChange();
        }
    }
</script>
<style scoped>
* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

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

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
        position:relative;

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

    }

    nav div.avatar-container {
        margin-right: 15px;
        text-align: right;


    }

    .logo-container {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
        position: relative;
    }

    .drop-down-container {
        position: relative;
        height: auto;
        width: auto;
        background-color: #ffffff;
        padding: 10px;
        text-align: right;
        display: block;
        position:absolute;

    }

    .drop-down-container span {
        display: block;
    }

    .drop-down-container span.separator{
        border-bottom: 1px solid #d7d7d7;
        margin: 10px -10px;
        width: auto;
    }
    a {
        color: #40c4ff;
    }
    li {
        width: 45%;
        display: inline-block;
        border: 1px solid #dedede;
        border-radius: 5px;
        text-align: center;
        margin: 1%;
        color: black;
        background-color: white;
    }
    .profile img {
        width: 75px;
        height: 75px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .profile {
        text-align: center;
        padding: 30px;
    }
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    .follow-button {
        background-color: purple;
        padding: 8px 16px;
        margin: 4px 0;
        color: white;
        border: none;
        border-radius: 4px;
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