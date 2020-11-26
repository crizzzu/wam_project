<template>
    <ul>
        <div class="main-container">
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
                        <router-link to="/login">Log Out</router-link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
            <div class="profile">
                <li  v-for="(profile, ix) in allProfiles" :key="ix">
                    <img v-bind:src="profile.avatar" alt="John Doe">
                    <h2>{{profile.firstname}} {{profile.lastname}}</h2>
                    <button class="follow-button" v-on:click ="clickOn">{{clicked}}</button>
                </li>
            </div>
    </ul>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Browse',
        computed:  {
            ...mapGetters(['allProfiles']),
            ...mapGetters(['allUsers'])
        },

        methods: {
            ...mapActions(['loadProfilesData']),
            ...mapActions(['loadUsersData']),

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
        }
    }
</script>
<style scoped>
    ul {
        width: 50%;
        margin: auto auto;
        display:block;
        position:center;
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
    .search-button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    #avatar-img {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }


    .drop-down-container {
        position: relative;
        height: auto;
        width: auto;
        background-color: #ffffff;
        padding: 10px;
        text-align: right;
        display: block;
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
        float:right;
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
    span{
        display: block;
    }
    .follow-button {
        background-color: purple;
        padding: 8px 16px;
        margin: 4px 0;
        color: white;
        border: none;
        border-radius: 4px;
    }

</style>