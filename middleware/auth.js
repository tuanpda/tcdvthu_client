import cookieparser from "cookieparser";

export default async function ({ store, redirect, route, $axios, req }) {
  console.log(store.state.modules.users.user.user);
  console.log(req.headers);

  // if (!store.state.modules.users.user.user) {
  //   try {
  //     const user = await $axios.$get("/api/users/auth/user"); // Lấy user nếu chưa có
  //     // store.dispatch("setUser", user);
  //     await store.dispatch("modules/users/fetchUsersLogin", user);
  //   } catch (e) {
  //     // Nếu không lấy được thì chuyển về login (trừ khi đã ở login)
  //     if (route.path !== "/login") {
  //       return redirect("/login");
  //     }
  //   }
  // }

  // // Nếu đã có user mà vào lại /login thì chuyển về /
  // if (store.state.modules.users.user.user && route.path === "/login") {
  //   return redirect("/");
  // }
}
