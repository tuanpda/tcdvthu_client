<template>
  <div class="pageIdex">
    <div v-if="user">
      <div class="columns" style="padding: 50px">
        <div class="column is-3">
          <div class="box has-text-centered">
            <p>
              <span
                style="
                  font-weight: 500;
                  font-size: 18px;
                  color: #6c757d;
                  font-family: 'Roboto', sans-serif;
                "
              >
                {{ greeting }}, {{ user.name }}
              </span>
            </p>
            <span
              style="font-weight: 600; font-size: 20px; font-family: monospace"
            >
              {{ currentTime }}
            </span>

            <!-- Ảnh căn giữa -->
            <div
              class="is-flex is-justify-content-center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <figure class="image is-128x128">
                <img
                  class="is-rounded"
                  :src="user.avatar"
                  alt="User"
                  style="
                    width: 128px;
                    height: 128px;
                    object-fit: cover;
                    border: 1px solid #f1aeb5;
                  "
                />
              </figure>
            </div>

            <!-- Thông tin tổ chức -->

            <div
              class="tag is-medium mt-3"
              style="background-color: #ff6600; color: white"
            >
              <template v-if="user.nvcongty == 0">
                <span>Điểm thu: {{ user.madaily }}</span>
              </template>
              <template v-else-if="user.nvcongty == 1 && user.role != 2">
                <span>Nhân viên công ty</span>
              </template>
              <template v-else> <span>Tổng hợp hồ sơ</span> </template>
            </div>

            <p class="mt-2">
              <span class="icon has-text-danger">
                <i class="fas fa-fingerprint"></i>
              </span>
              <template v-if="user.nvcongty == 0">
                <span>{{ user.tendaily }}</span>
              </template>
              <template v-else-if="user.nvcongty == 1 && user.role != 2">
                <span>Công ty TNHH An Sinh Phủ Diễn</span>
              </template>
              <template v-else>
                <span>Công ty TNHH An Sinh Phủ Diễn</span></template
              >
            </p>

            <button class="button is-dark mt-4 is-fullwidth">
              {{ user.cccd }} / {{ user.sodienthoai }}
            </button>
          </div>
        </div>

        <div class="column is-2">
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #ffc107;
              "
            >
              {{ reportHoso.tong_hoso }}
            </span>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng số người đã kê khai</span
            >
          </div>
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #0d6efd;
              "
            >
              {{ reportHoso.tong_sohoso }}
            </span>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng số bộ hồ sơ đã nạp</span
            >
          </div>
        </div>

        <div class="column is-2">
          <div class="box has-text-centered">
            <nuxt-link
              to="/nhanviendailythu/timkiemhoso"
              style="text-decoration: none"
            >
              <span
                style="
                  font-size: 60px;
                  font-weight: 700;
                  font-family: 'Roboto', sans-serif;
                  color: #dc3545;
                "
              >
                {{ reportHoso.hoso_loi }}
              </span>
            </nuxt-link>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng số kê khai lỗi</span
            >
          </div>
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #198754;
              "
            >
              {{ reportHoso.hoso_dagui }}
            </span>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng số hồ sơ đã lên cổng</span
            >
          </div>
        </div>

        <div class="column is-3">
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #fd7e14;
              "
            >
              {{ reportHoso.hoso_chuagui }}
            </span>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng kê khai chưa gửi lên cổng</span
            >
          </div>
          <div class="box has-text-centered">
            <span
              style="
                font-size: 40px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #6610f2;
              "
            >
              {{ reportHoso.tong_sotien | formatNumber }}
            </span>
            <hr class="navbar-divider" />
            <span style="font-size: 15px; font-weight: 500"
              >Tổng số tiền thu</span
            >
          </div>
        </div>
      </div>

      <div class="columns" style="padding-left: 50px; padding-right: 50px">
        <div class="column is-4">
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #f1aeb5;
              "
            >
              {{ reportHoso.tong_AR }}
            </span>
            <hr class="navbar-divider" />
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #d63384;
              "
            >
              AR
            </span>
          </div>
        </div>
        <div class="column is-4">
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #f1aeb5;
              "
            >
              {{ reportHoso.tong_BI }}
            </span>
            <hr class="navbar-divider" />
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #0d6efd;
              "
            >
              BI
            </span>
          </div>
        </div>
        <div class="column is-4">
          <div class="box has-text-centered">
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #f1aeb5;
              "
            >
              {{ reportHoso.tong_IS }}
            </span>
            <hr class="navbar-divider" />
            <span
              style="
                font-size: 60px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
                color: #fd7e14;
              "
            >
              IS
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
font-size: 32px; font-weight: 700; font-family: 'Roboto', sans-serif;

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      showNotification: true, // Để xác định liệu thông báo có hiển thị hay không
      role: 0,
      hsnumbererror: 0,
      currentTime: "",
      greeting: "",
      reportHoso: {},
    };
  },

  computed: {
    user() {
      return this.$store.state.modules.users.user.user;
    },
  },

  watch: {
    user(newUser) {
      if (newUser) {
        this.role = newUser.role;
        this.report();
      }
    },
  },

  mounted() {
    // console.log(this.user);

    const user = this.user;
    if (user) {
      this.role = user.role;
      // console.log(this.role);

      this.report();
    } else {
      console.warn("User chưa có dữ liệu!");
    }

    this.report();

    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    closeNotification() {
      this.showNotification = false; // Tắt thông báo khi nhấn nút "delete"
    },

    async report() {
      // console.log(this.user.madaily);

      const madaily = { madaily: this.user.madaily };
      const res = await this.$axios.post(
        `/api/kekhai/thongke-hosokekhai`,
        madaily
      );
      // console.log(res.data.data);
      this.reportHoso = res.data.data;
    },

    updateTime() {
      const now = new Date();

      // Giờ phút giây (24h)
      const time = now.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();

      this.currentTime = `${time}, ${day} Tháng ${month} Năm ${year}`;

      // Xác định lời chào
      const hour = now.getHours();
      if (hour >= 5 && hour < 12) {
        this.greeting = "Chào buổi sáng";
      } else if (hour >= 12 && hour < 14) {
        this.greeting = "Chào buổi trưa";
      } else if (hour >= 14 && hour < 18) {
        this.greeting = "Chào buổi chiều";
      } else if (hour >= 18 && hour < 22) {
        this.greeting = "Chào buổi tối";
      } else {
        this.greeting = "Chúc ngủ ngon";
      }
    },
  },
};
</script>

<style lang="css" scoped>
.pageIdex {
  height: 850px;
  background: white; /* hoặc màu nền bạn muốn */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* đổ bóng mềm, đẹp */
  border-radius: 12px; /* bo tròn nhẹ cho đẹp */
  padding: 20px; /* tùy chọn, nếu bạn muốn thêm khoảng cách trong */

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* đẩy phần đầu lên và phần cuối xuống */
}
</style>
