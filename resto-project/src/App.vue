<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  
}

body{
  padding: 0;
  margin: 0;
}

.logo{
    width: 100px;
}
.register input, .login input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button , .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
#radius-shape-1 {
    height: 220px;
    width: 220px;
    top: -60px;
    left: -130px;
    background: radial-gradient(#00466b, #1fe5ff);
    overflow: hidden;
}

#radius-shape-2 {
    border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    bottom: -50px;
    right: -30px;
    width: 300px;
    height: 300px;
    background: radial-gradient(#006b6b, #1fe5ff);
    overflow: hidden;
}
.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
}
body {
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(51, 180, 222), rgb(14, 135, 169))
}

/* Dashboard */

@media (min-width:960px) {
    .sidenav-header {
        text-align: center;
        margin-bottom: 30px;
        height: 100px;
    }
}

.navbar-vertical.navbar-light {
    border-color: rgba(0, 0, 0, .05);
    background-color: #f6f9fc;
    z-index: 5;
    border-style: solid;
    box-shadow: 0 0 2rem 0 rgba(7, 86, 222, 0.15);
}

@media (min-width: 992px) {
    .navbar-vertical.navbar-expand-lg {
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        display: block;
        overflow-y: auto;
        width: 100%;
        max-width: 260px;
        padding-right: 0;
        padding-left: 0;
    }
}

@media (min-width: 992px) {
    .navbar-vertical.navbar-expand-lg .navbar-collapse {
        display: flex;
        flex-direction: column;
        margin-right: -1.5rem;
        margin-left: -1.5rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        flex: 1 1;
        align-items: stretch;
    }
    .navbar-vertical .dash-link {
        width: 100%;
        margin-top: 20px;
    }
    .navbar-vertical.navbar-expand-lg .navbar-collapse>* {
        min-width: 100%;
    }
    .navbar-vertical.navbar-expand-lg .navbar-nav {
        flex-direction: column;
        margin-right: -1.5rem;
        margin-left: -1.5rem;
    }
}

.navbar-vertical+.main-content {
    margin-left: 240px;
    transition: all .15s ease;
    margin-right: 30px;
}

@media (max-width: 992px) {
    .navbar-vertical+.main-content {
        margin-left: 20px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .sidenav.fixed-left+.main-content {
        transition: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .sidenav.fixed-right+.main-content {
        transition: none;
    }
}

</style>
