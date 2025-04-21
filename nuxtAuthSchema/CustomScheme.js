import { LocalScheme } from "~auth/runtime";
// import { LocalScheme } from '@nuxtjs/auth'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  async fetchUser(endpoint) {
    // Gửi yêu cầu API để lấy thông tin người dùng từ máy chủ
    // const response = await this.$auth.requestWith(this.name, endpoint)

    // Token is required but not available
    // console.log(this.check());
    if (!this.check().valid) {
      this.$router.push("/");
      return;
      // this.$auth.logout(); // Hủy đăng nhập
      // return;
    }

    // User endpoint is disabled.
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    }

    // Try to fetch user and then set
    return this.$auth
      .requestWith(this.name, endpoint, this.options.endpoints.user)
      .then((response) => {
        // console.log(response.data);
        const user = {
          _id: response.data._id,
          email: response.data.email,
          username: response.data.username,
          name: response.data.name,
          role: response.data.role,
          avatar: response.data.avatar,
          matinh: response.data.matinh,
          tentinh: response.data.tentinh,
          masobhxh: response.data.masobhxh,
          cccd: response.data.cccd,
          sodienthoai: response.data.sodienthoai,
          diachi: response.data.diachi,
          tenxa: response.data.tenxa,
          tenhuyen: response.data.tenhuyen,
          madaily: response.data.madaily,
          tendaily: response.data.tendaily,
          matochuc: response.data.matochuc,
          tentochuc: response.data.tentochuc,
          nvcongty: response.data.nvcongty,
          res_sent: response.data.res_sent,
          macqbhxh: response.data.macqbhxh,
          tencqbhxh: response.data.tencqbhxh,
        };

        // Set the custom user
        // The `customUser` object will be accessible through `this.$auth.user`
        // Like `this.$auth.user.fullName` or `this.$auth.user.roles`
        this.$auth.setUser(user);

        return response;
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: "fetchUser" });
      });
  }
}

// import { LocalScheme } from "~auth/runtime";
// export default class CustomScheme extends LocalScheme {
//   // Custom login
//   async login(endpoint) {
//     try {
//       const response = await this.$auth.request(
//         endpoint,
//         this.options.endpoints.login
//       );

//       const token =
//         response.data?.token ||
//         response.data?.access_token ||
//         response.data?.accessToken;
//       if (!token) throw new Error("Token not received");

//       // ✅ Ghi token vào cookie (không dùng localStorage nữa)
//       const cookieName = `auth._token.${this.name}`;
//       const expires = new Date(Date.now() + 60 * 60 * 1000); // Token hết hạn sau 1 giờ
//       document.cookie = `${cookieName}=Bearer ${token}; path=/; expires=${expires.toUTCString()}`;

//       // Gọi fetchUser
//       await this.fetchUser();

//       return response;
//     } catch (error) {
//       throw new Error("Login failed: " + error.message);
//     }
//   }

//   // Custom fetchUser (giữ nguyên như bạn đã viết)
//   async fetchUser(endpoint) {
//     if (!this.check().valid) {
//       this.$router.push("/");
//       return;
//     }

//     if (!this.options.endpoints.user) {
//       this.$auth.setUser({});
//       return;
//     }

//     return this.$auth
//       .requestWith(this.name, endpoint, this.options.endpoints.user)
//       .then((response) => {
//         const user = {
//           _id: response.data._id,
//           email: response.data.email,
//           username: response.data.username,
//           name: response.data.name,
//           role: response.data.role,
//           avatar: response.data.avatar,
//           matinh: response.data.matinh,
//           tentinh: response.data.tentinh,
//           masobhxh: response.data.masobhxh,
//           cccd: response.data.cccd,
//           sodienthoai: response.data.sodienthoai,
//           diachi: response.data.diachi,
//           tenxa: response.data.tenxa,
//           tenhuyen: response.data.tenhuyen,
//           madaily: response.data.madaily,
//           tendaily: response.data.tendaily,
//           matochuc: response.data.matochuc,
//           tentochuc: response.data.tentochuc,
//           nvcongty: response.data.nvcongty,
//           res_sent: response.data.res_sent,
//           macqbhxh: response.data.macqbhxh,
//           tencqbhxh: response.data.tencqbhxh,
//         };

//         this.$auth.setUser(user);
//         return response;
//       })
//       .catch((error) => {
//         this.$auth.callOnError(error, { method: "fetchUser" });
//       });
//   }

//   // Custom logout: xóa cookie token
//   logout() {
//     document.cookie = `auth._token.${this.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
//     this.$auth.reset();
//   }
// }
