<template>
    <ul>
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
        <section class="main-container">
            <li v-for="(post, index) in allPosts" :key="index">
                <section class="post">
                    <div class="post-author">
                        <span class="post-author-info">
                            <img v-bind:src="post.author.avatar">
                            <small>{{post.author.firstname}}  {{post.author.lastname}}</small>
                        </span>
                        <small id="createTime">{{post.createTime}}</small>
                    </div>
                    <div class="post-image">
                            <img v-if="post.media" v-bind:src="post.media.url" alt="">
                        <div class="post-title">
                            <h3>{{post.text}}</h3>
                            <div class="post-actions">
                                <button type="button" name="like" :style="isClicked ? { 'background-color': 'blue' } : null" @click="toggleIsClicked" class="like-button">{{post.likes}}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </li>
        </section>
    </ul>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Index',
        computed:  {
            ...mapGetters(['allPosts']),
            ...mapGetters(['allUsers'])
        },
        methods: {
            ...mapActions(['loadPosts']),
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
            toggleIsClicked: function () {
                this.isClicked = !this.isClicked
            }
        },
        created() {
            this.loadPosts();
            this.loadUsersData();
            this.toggle();
            this.toggleIsClicked();
        }
    }
</script>
<style scoped>
    ul {
        width: 30%;
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


    #avatar-img {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .main-container {
        width: 100%;
        min-height: 100%;
        margin: auto auto;
        padding: 90px 15px 15px 15px;
        background-color: #ffffff;
    }
    span{
        display: block;
    }
    a {
        color: #40c4ff;
    }

    .post {
        margin: 10px auto;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        border-radius: 5px;
        width: 70%;
        min-height: 200px;
        max-height: 350px;
        object-fit: cover;
        object-position: center;
        float: left;
        position: relative;
        padding: 10px;


    }
    .post-author .post-author-info {
        float: left;
        position: relative;
        width: 50%;
        padding: 10px;
    }
    .post-author-info small {
        float: right;
        position: absolute;
        width: 50%;
        padding: 10px;
    }
    #createTime {
        float: right;
        position: absolute;
        width: 50%;
        padding: 20px;


    }
    .post-author img {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
    }
    .post-image img, video {
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
    }

    .post-title {
        position:relative;

    }

    li {
        position: relative;
        list-style-type: none;
    }

    .like-button {
        background-image: url(/images/like.png);
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