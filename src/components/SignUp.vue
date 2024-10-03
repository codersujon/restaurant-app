<script setup>

  // import axios from 'axios';
  // export default {
  //   name: 'SignUp',
  //   data (){
  //     return {
  //       name: '',
  //       email: '',
  //       password: ''
  //     }
  //   },
  //   methods:{
  //     async signUp(){
  //
  //       let result = await axios.post("http://localhost:3000/users", {
  //         name: this.name,
  //         email: this.email,
  //         password: this.password
  //       })
  //
  //       if(result.status == 201){
  //         alert("User Sign Up Successfully!");
  //         localStorage.setItem("User-Info", JSON.stringify(result.data)); // convert to JSON
  //         this.$router.push({name: "HomePage"}); // redirect to Home Page
  //       }
  //     }
  //   },
  //
  //   mounted(){
  //     let user = localStorage.getItem('User-Info');
  //     if(user){
  //       this.$router.push({name: "HomePage"});
  //     }
  //   }
  // }
</script>

<template>
    <section class="signUp">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card my-5 text-black">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <form class="mx-1 mx-md-4 p-4 rounded">
                                        <p class="display-5 text-center fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign Up</p>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="text" id="name" class="form-control" v-model="name" placeholder="Enter your name" required/>
                                                <div class="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" id="email" class="form-control" v-model="email" placeholder="Enter your email" required/>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" id="password" class="form-control" v-model="password" placeholder="Enter your password" required/>
                                            </div>
                                        </div>

                                      <button type="button" class="btn btn-danger" v-on:click="signUp">Sign Up</button>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex mb-md-5  align-items-center justify-content-center order-1 order-lg-2">
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

<style>

.card{
  border-radius: 25px;
}
.resto{
    width: 280px;
}

@media (max-width: 767px) {
    .resto{
      width: 180px;
    }
}
</style>