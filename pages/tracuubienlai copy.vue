<template>
  <div class="column">
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="control">
            <span style="color: #198754" class="icon is-small is-left">
              <i class="far fa-calendar-alt"></i>
            </span>
            <span style="font-weight: bold; color: #198754"
              >Tìm kiếm hồ sơ kê khai</span
            >
          </div>
        </div>
      </div>

      <div class="box"></div>

      <div style="margin-top: 20px">
        <div class="table_wrapper">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead style="font-weight: bold">
              <tr style="font-size: small; background-color: #faf0e6">
                <td rowspan="2" style="text-align: center; width: 3%">STT</td>
                <td rowspan="2" style="text-align: center">_ID</td>
                <td style="text-align: center">Trạng thái</td>
                <td style="text-align: center">Xem chi tiết</td>
                <td rowspan="2" style="text-align: center">Mã xác nhận</td>
                <td rowspan="2" style="text-align: center">In Biên lai</td>
                <td rowspan="2" style="text-align: center">Số hồ sơ</td>
                <td rowspan="2" style="text-align: center">Mã đại lý</td>
                <td rowspan="2" style="text-align: center">Tên đại lý</td>
                <td rowspan="2" style="text-align: center">Loại hình</td>
                <td rowspan="2" style="text-align: center">Kỳ kê khai</td>
                <td rowspan="2" style="text-align: center">Ngày kê khai</td>
                <td rowspan="2" style="text-align: center">Mã số BHXH</td>
                <td rowspan="2" style="text-align: center">Họ tên</td>
                <td rowspan="2" style="text-align: center">Ngày sinh</td>
                <td rowspan="2" style="text-align: center">Giới tính</td>
                <td rowspan="2" style="text-align: center">CCCD</td>
                <td rowspan="2" style="text-align: center">Điện thoại</td>
                <td rowspan="2" style="text-align: center">Phương án</td>
                <td rowspan="2" style="text-align: center">Số tiền</td>
                <td rowspan="2" style="text-align: center">Từ ngày</td>
                <td rowspan="2" style="text-align: center">Số tháng</td>
                <td rowspan="2" style="text-align: center">Mức tiền đóng</td>
                <td rowspan="2" style="text-align: center">Từ tháng</td>
                <td rowspan="2" style="text-align: center">Đối tượng</td>
                <td rowspan="2" style="text-align: center">Mô tả lỗi</td>
              </tr>
            </thead>
          </table>
        </div>
        <!-- Phân trang -->
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  layout: "none",

  data() {
    return {
      cccd: "",
      masobhxh: "",
      sobienlai: "",
      viewXacnhan: false,
      data: {},
      pdfSrc: "", // đường dẫn file PDF
    };
  },

  methods: {
    async viewBienlai() {
      const res = await this.$axios.post("/api/auth/view-bienlai-people", {
        cccd: this.cccd,
        masobhxh: this.masobhxh,
        sobienlai: this.sobienlai,
      });

      // console.log(res.data);
      if (res.data.hs) {
        this.data = res.data.hs;
        this.viewXacnhan = true;

        // tạo tên file PDF từ sobienlai và hoten
        const sobienlai = res.data.hs.sobienlai;
        const hoten = res.data.hs.hoten;

        // encode để tránh lỗi Unicode trong URL
        const fileName = `${sobienlai}_${hoten}`.replace(/\s+/g, "%20");
        this.pdfSrc = `http://27.73.37.94:4042/bienlaidientu/${fileName}.pdf`;
        // this.pdfSrc = `http://27.73.37.94:4042/bienlaidientu/0000003_Th%C3%A1i%20B%C3%A1%20Long.pdf`;
      }
    },

    async logout() {
      console.log("logout");

      try {
        await this.$axios.$post("/api/auth/logout");

        // ✅ Cập nhật store: xóa user trong module 'users'
        this.$store.commit("modules/users/setUser", {});

        // ✅ Điều hướng về trang login
        this.$router.push("/login");
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
  },
};
</script>

<style scoped>
.hero.is-success {
  background: #d3d3d3;
  background-image: url("../assets/images/login2.jpg");
  background-size: cover;
}

.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.box {
  margin-top: 5rem;
  /* background-color: transparent; */
  border: 5px solid white;
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

.forgotpas {
  color: #800000;
  font-weight: 600;
  font-size: 13px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: color 0.3s; /* Thời gian chuyển tiếp khi thay đổi màu */
}

.forgotpas:hover {
  color: #ffcc00; /* Màu vàng khi di chuột */
}

.pdf-frame {
  width: 100%;
  height: 700px;
  border: none;
}

@media (max-width: 768px) {
  .pdf-frame {
    height: 400px; /* Hoặc bất kỳ chiều cao phù hợp */
  }
}
</style>
