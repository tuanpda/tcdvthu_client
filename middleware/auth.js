import cookieparser from "cookieparser";

export default async function ({ store, redirect, route, $axios, req }) {
  // console.log(store.state.modules.users.user.user);
  // console.log(req.headers.cookie);

  if (process.server && req && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie);
    const token = parsed.token;
    console.log("🍪 Token từ cookie:", token);

    if (!token) {
      console.log("❌ Không có token, redirect login");
      return redirect("/login");
    }

    console.log("vào");

    try {
      console.log("check");

      const user = await $axios.$get("/api/users/auth/user", {
        headers: {
          cookie: req.headers.cookie,
        },
      });
      console.log(user);

      console.log("pass qua gọi");

      // console.log("✅ Lấy user thành công:", user);
      // await store.dispatch("modules/users/fetchUsersLogin", user);
    } catch (e) {
      console.error("❌ Lỗi khi lấy user:", e);
      if (route.path !== "/login") {
        return redirect("/login");
      }
    }
  } else {
    console.log("🚫 Không có cookie hoặc không phải process.server");
  }

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
