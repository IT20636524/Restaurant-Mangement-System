<template>
    <Header />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <div class="container px-4 py-5 px-md-5 text-center ">
        <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                
                <div class="background-radial-gradient overflow-hidden">
                    <table border="1">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Contact</td>
                            <td>Address</td>
                            <td>Actions</td>
                        </tr>
                        <tr v-for="item in restaurant" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.contact }}</td>
                            <td>{{ item.address }}</td>
                            <td>
                                <router-link :to="'/update/' + item.id">Update</router-link>
                                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                            </td>
                        </tr>
                    </table>
                    
                </div>
                <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
            </div>
        </div>
    </div>
    <Footer/>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
import Footer from './Footer.vue';
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    components: {
    Header,
    Footer
},
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);
            console.warn(result);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: "SignUp" });
            }

            let result = await axios.get("http://localhost:3000/restaurants");

            console.warn(result);
            this.restaurant = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>