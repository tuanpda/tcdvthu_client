<template>
  <div>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="centered-image">
              <img
                src="@/assets/logos/an-sinh-bhxh-high-resolution-logo-black-transparent.png"
                alt="Your Image"
                width="250" height="150"
              />
            </div>
            <div class="box" style="margin-top: 10px; color: red">
              <p class="subtitle is-5">ĐĂNG NHẬP HỆ THỐNG</p>
              <br />
              <form>
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-small"
                      type="username"
                      placeholder="Tên đăng nhập"
                      v-model="username"
                      autofocus=""
                    />
                    <span class="icon is-small is-left">
                      <i style="color: #37e7ac" class="fas fa-user"></i>
                    </span>
                    <span class="icon is-medium is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                </div>
                <div class="field" style="padding-top: 10px">
                  <div class="control has-icons-left">
                    <input
                      v-model="password"
                      class="input is-small"
                      type="password"
                      placeholder="Mật khẩu"
                      autocomplete="current-password"
                    />
                    <span class="icon is-small is-left">
                      <i style="color: #37e7ac" class="fas fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field" style="padding-top: 10px">
                  <button
                    @click.prevent="signIn"
                    class="button is-small is-block is-danger is-fullwidth"
                  >
                    Đăng nhập
                  </button>
                </div>
                <br />
              </form>
            </div>
            <div class="centered-image">
              <img
                src="@/assets/images/logobhxh.png"
                alt="Your Image"
                width="100" height="40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "LoginPage",
  layout: "none",
  auth: "guest",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async signIn() {
      try {
        await this.$auth.loginWith("custom", {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        this.$router.push("/"); 
      } catch (error) {
        // Xử lý lỗi khi đăng nhập không thành công
        // console.error("Đăng nhập thất bại:", error);
        Swal.fire({
          title: "Đăng nhập thất bại",
          text: "Sai thông tin đăng nhập hoặc tài khoản chưa được kích hoạt !!!",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
  background-image: url("../assets/images/login1.jpg");
  background-size: cover;
}

.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.box {
  margin-top: 5rem;
  background-color: transparent;
  border: 2px solid white;
}

.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}

.avatar img {
  height: 128px;
  width: 128px;
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

p.subtitle {
  padding-top: 1rem;
}

.centered-image {
  margin: 0 auto;
  display: block;
}
</style>
