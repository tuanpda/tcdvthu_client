import cookieparser from "cookieparser";

export default async function ({ store, redirect, req, app }) {
  // console.log(req);
  // console.log(req.headers.cookie);
  console.log('Middleware chạy ở:', process.server ? 'Server' : 'Client');

  // if (req && req.headers && req.headers.cookie) {
  //   console.log(req.headers.cookie);
  //   console.log('fuck');
  //         try {
  //       const res = await app.$axios.$get("/api/users/auth/user");
  //       await store.dispatch("fetchUsersLogin");
  //     } catch (e) {
  //       return redirect("/login");
  //     }
  //   console.log(store.state.user.user);
  // } else {
  //   console.log('req.headers.cookie không tồn tại');
  //   return redirect("/login");
  // }

    //   const parsed = cookieparser.parse(req.headers.cookie);
    // const token = parsed.token;
    // console.log(token);
    // console.log('----------');
    // console.log(store.state.user.user);
    
    
    
  
  // if (req && req.headers.cookie) {
  //   const parsed = cookieparser.parse(req.headers.cookie);
  //   const token = parsed.token;

  //   console.log(token);
    

  //   // Nếu user chưa có trong store thì fetch lại từ API
  //   if (!store.state.user.user || !store.state.user.user._id) {
  //     try {
  //       const res = await app.$axios.$get("/api/users/auth/user");
  //       await store.dispatch("fetchUsersLogin");
  //     } catch (e) {
  //       return redirect("/login");
  //     }
  //   }

  //   const user = store.state.user.user;

  //   console.log(user);
    

  //   if (!token) {
  //     return redirect("/login");
  //   } else {
  //     if (user.role === 9) {
  //       console.log('hhjk');
        
  //       return redirect("/tracuubienlai");
  //     } else {
  //       return redirect("/");
  //     }
  //   }
  // }
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
