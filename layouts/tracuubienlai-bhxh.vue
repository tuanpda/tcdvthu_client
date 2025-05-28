<template>
  <div>
    <section class="special-layout">
      <nuxt />
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "~/components/Footer";
export default {
  name: "TracuuBienLaiLayout",

  async mounted() {
    const user = this.$store.state.modules.users.user.user;

    // Nếu chưa có user, gọi lại API
    if (!user) {
      try {
        const res = await this.$axios.$get("/api/users/auth/user");
        await this.$store.dispatch("modules/users/fetchUsersLogin", res.user);
      } catch (e) {
        return this.$router.push("/login");
      }
    }

    // Kiểm tra quyền
    const role = this.$store.state.modules.users.user.user?.role;
    if (role !== 9) {
      console.warn("🚫 Bạn không được vào trang này!");
      this.$router.push("/unauthorized"); // hoặc /, hoặc hiển thị lỗi gì đó
    }
  },
};
</script>

<style scoped>
.special-layout {
  background-color: #f5f5f5;
  padding: 20px;
}
</style>
