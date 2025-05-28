import cookieparser from "cookieparser";

export default async function ({ store, redirect, req, app }) {
  if (process.server && req && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie);
    const token = parsed.token;

    // console.log(store.state.modules.users);
    // Nếu user chưa có trong store thì fetch lại từ API
    if (!store.state.modules.users.user.user) {
      try {
        const res = await app.$axios.$get("/api/users/auth/user");
        await store.dispatch("modules/users/fetchUsersLogin", res.user);
      } catch (e) {
        return redirect("/login");
      }
    }

    const user = store.state.modules.users.user.user;

    if (!token) {
      // console.log("❌ Không có token, chuyển về login");
      return redirect("/login");
    } else  {
      if(user.role===9){
        return redirect("/tracuubienlai");
      }else{
        return redirect("/");
      }
      
    }
    
  }
}

// export default async function ({ store, redirect, req }) {
//   if (process.server && req && req.headers.cookie) {
//     const parsed = cookieparser.parse(req.headers.cookie);
//     const token = parsed.token;

//     // console.log(token);

//     if (!token) {
//       // console.log("❌ Không có token, chuyển về login");
//       return redirect("/login");
//     } else {
//       // console.log("✅ Có token, cho phép truy cập");
//       return redirect("/");
//     }
//   }
// }
