<template>
     <section class="login">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card my-5 text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                    <form class="mx-1 mx-md-4">

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" id="email" class="form-control" placeholder="Enter your email" v-model="email" required/>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" id="password" class="form-control" placeholder="Enter your password" v-model="password" required/>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="button" class="btn btn-primary btn-lg w-100" v-on:click="login">Login</button>
                                        </div>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">
                                        <img src="../assets/resto-logo.png" alt="restaurant-logo" class="img-fluid resto">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods:{
        async login(){
           // http://localhost:3000/users?email=bruce@gmail.com&password=12345  -> API Check for login

           let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
           
           if(result.status == 200 && result.data.length > 0){
             alert("Login Successfully!");
             localStorage.setItem("User-Info", JSON.stringify(result.data[0])); // convert to JSON
             this.$router.push({name: "HomePage"});
           }
        }
    },
    mounted(){
        let user = localStorage.getItem("User-Info");
        if(user){
            this.$router.push({name: "HomePage"});
        }
    }
}
</script>

<style scoped>
.resto{
    width: 280px;
}
</style>