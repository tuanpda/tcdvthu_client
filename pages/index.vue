<template>
  <div>
    <section class="hero is-large is-info">
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
        <div class="columns">
          <div class="column">
            <template v-if="diemthu.nvcongty == 1">
              <h4 class="title is-5">
                <span class="icon">
                  <i style="" class="fas fa-money-check"></i>
                </span>
                Bạn đang Đăng nhập với Vai trò Nhân viên Công ty
              </h4>
            </template>
            <template v-else>
              <h4 class="title is-5">
                <span class="icon">
                  <i style="" class="fas fa-money-check"></i>
                </span>
                Bạn đang Đăng nhập với Điểm thu: {{ this.diemthu.madaily }} -
                {{ this.diemthu.tendaily }}
              </h4>
            </template>

            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="fas fa-male"></i>
              </span>
              Người sử dụng: {{ this.diemthu.name }}
            </h5>
            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="far fa-address-card"></i>
              </span>
              Căn cước công dân: {{ this.diemthu.cccd }}
            </h5>
            <h5 class="title is-6">
              <span class="icon">
                <i style="" class="fas fa-phone-square"></i>
              </span>
              Số điện thoại: {{ this.diemthu.sodienthoai }}
            </h5>
          </div>
          <div class="column">
            <figure class="image">
              <img
                style="height: 170px; width: 135px; border-width: 1px solid"
                :src="this.diemthu.avatar"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "auth",
  data() {
    return {
      diemthu: {},
    };
  },

  mounted() {
    // console.log(this.$auth.user);
    this.diemthu = this.$auth.user;
  },
};
</script>
