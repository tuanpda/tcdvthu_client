<template>
  <div class="pageIdex">
    <div class="columns">
      <div class="column" style="padding: 50px; position: relative">
        <div v-if="showNotification" class="notification is-warning">
          <button class="delete" @click="closeNotification"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur.
        </div>
        <div
          v-else
          @click="showNotification = true"
          style="
            position: absolute;
            bottom: 10px;
            right: 100px;
            cursor: pointer;
            color: #ffdd57;
            background-color: #fffbe6;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85rem;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          "
        >
          <i class="fas fa-info-circle"></i> Thông báo ẩn (bấm để mở)
        </div>
      </div>
    </div>

    <div class="columns">
      <hr class="navbar-diliver" />
      <div class="column" style="padding: 50px">
        <div class="columns" v-if="user">
          <div class="column is-8">
            <div class="mb-4">
              <p class="title is-6">
                <span class="icon">
                  <i class="fas fa-money-check"></i>
                </span>
                <span>
                  <template v-if="user.nvcongty == 1 && user.role != 2">
                    Bạn đang Đăng nhập với Vai trò Nhân viên Công ty
                  </template>
                  <template v-else-if="user.nvcongty == 1 && user.role == 2">
                    Bạn đang Đăng nhập với tài khoản Tổng hợp
                  </template>
                  <template v-else>
                    Bạn đang Đăng nhập với Điểm thu: {{ user.madaily }} -
                    {{ user.tendaily }}
                  </template>
                </span>
              </p>
            </div>

            <p class="mb-2">
              <span class="icon">
                <i class="fas fa-male"></i>
              </span>
              Người sử dụng: {{ user.name }}
            </p>

            <p class="mb-2">
              <span class="icon">
                <i class="far fa-address-card"></i>
              </span>
              Căn cước công dân: {{ user.cccd }}
            </p>

            <p class="mb-2">
              <span class="icon">
                <i class="fas fa-phone-square"></i>
              </span>
              Số điện thoại: {{ user.sodienthoai }}
            </p>
          </div>

          <div class="column">
            <figure class="image">
              <img
                style="height: 170px; width: 135px; border-width: 1px solid"
                :src="user.avatar"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="hero is-large is-info">
      <div style="padding: 100px; position: relative">
        <div v-if="showNotification" class="notification is-warning">
          <button class="delete" @click="closeNotification"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur.
        </div>
        <div
          v-else
          @click="showNotification = true"
          style="
            position: absolute;
            bottom: 10px;
            right: 100px;
            cursor: pointer;
            color: #ffdd57;
            background-color: #fffbe6;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85rem;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          "
        >
          <i class="fas fa-info-circle"></i> Thông báo ẩn (bấm để mở)
        </div>
      </div>
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <p class="title">
              <span class="icon">
                <i style="" class="far fa-building"></i>
              </span>
              Công ty TNHH An sinh xã hội Phủ Diễn
            </p>
            <h3 class="title is-5">
              <span class="icon">
                <i style="" class="fab fa-first-order-alt"></i>
              </span>
              HỆ THỐNG KÊ KHAI, GỬI THÔNG TIN ĐÓNG BHXH, BHYT
            </h3>
            <h4 class="title is-6">
              <span class="icon">
                <i style="" class="fas fa-map-marker-alt"></i>
              </span>
              Địa chỉ: Liền kề 05, Khối 4, Thị Trấn Diễn Châu, huyện Diễn Châu,
              tỉnh Nghệ An.
            </h4>
            <hr class="navbar-diliver" />
          </div>
        </div>
        <hr class="navbar-diliver" />
        <div class="columns" v-if="user">
          <div class="column is-8">
            <template v-if="user.nvcongty == 1 && user.role != 2">
              <h5 class="title is-5">
                <span class="icon">
                  <i style="" class="fas fa-money-check"></i>
                </span>
                Bạn đang Đăng nhập với Vai trò Nhân viên Công ty
              </h5>
            </template>
            <template v-else-if="user.nvcongty == 1 && user.role == 2">
              <h5 class="title is-5">
                <span class="icon">
                  <i style="" class="fas fa-money-check"></i>
                </span>
                Bạn đang Đăng nhập với tài khoản Tổng hợp
              </h5>
            </template>
            <template v-else>
              <h5 class="title is-5">
                <span class="icon">
                  <i style="" class="fas fa-money-check"></i>
                </span>
                Bạn đang Đăng nhập với Điểm thu: {{ user.madaily }} -
                {{ user.tendaily }}
              </h5>
            </template>

            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="fas fa-male"></i>
              </span>
              Người sử dụng: {{ user.name }}
            </h5>
            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="far fa-address-card"></i>
              </span>
              Căn cước công dân: {{ user.cccd }}
            </h5>
            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="fas fa-phone-square"></i>
              </span>
              Số điện thoại: {{ user.sodienthoai }}
            </h5>
          </div>
          <div class="column">
            <figure class="image">
              <img
                style="height: 170px; width: 135px; border-width: 1px solid"
                :src="user.avatar"
              />
            </figure>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      showNotification: true, // Để xác định liệu thông báo có hiển thị hay không
    };
  },

  computed: {
    user() {
      return this.$store.state.modules.users.user.user;
    },
  },

  methods: {
    closeNotification() {
      this.showNotification = false; // Tắt thông báo khi nhấn nút "delete"
    },
  },
};
</script>

<style lang="css" scoped>
.pageIdex {
  height: 750px;
  background: white; /* hoặc màu nền bạn muốn */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* đổ bóng mềm, đẹp */
  border-radius: 12px; /* bo tròn nhẹ cho đẹp */
  padding: 20px; /* tùy chọn, nếu bạn muốn thêm khoảng cách trong */

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* đẩy phần đầu lên và phần cuối xuống */
}
</style>
