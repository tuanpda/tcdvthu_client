<template>
  <div>
    <navbar />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/admin/Navbar";
import Footer from "~/components/Footer";
export default {
  middleware: "auth",
  components: {
    Navbar,
    Footer,
  },

  async mounted() {
    const user = this.$store.state.user;

    // Nếu chưa có user, gọi lại API
    if (!user) {
      try {
        const res = await this.$axios.$get("/api/users/auth/user");
        await this.$store.dispatch("fetchUsersLogin", res.user);
      } catch (e) {
        return this.$router.push("/login");
      }
    }

    // Kiểm tra quyền
    const role = this.$store.state.user?.role;
    if (role !== 1) {
      console.warn("🚫 Không đủ quyền vào trang admin");
      this.$router.push("/unauthorized"); // hoặc /, hoặc hiển thị lỗi gì đó
    }
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
