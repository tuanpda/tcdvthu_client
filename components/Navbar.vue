<template>
  <nav
    class="navbar is-transparent is-info"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="@/assets/logos/an-sinh-bhxh-high-resolution-logo-white-transparent.png"
            width="200"
            height="100"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          @click="toggleMenu"
        >
          <div>
            <img
              style="color: #f14668"
              src="@/assets/images/buger.png"
              alt=""
            />
          </div>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': isMenuOpen }"
        id="navbarMenu"
      >
        <div class="navbar-start">
          <!-- Danh mục -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" @click="toggleDropdown_danhmuc">
              <span
                style="color: hsl(0deg, 0%, 100%)"
                class="icon is-small is-left"
              >
                <i class="fas fa-layer-group"></i>
              </span>
              &ensp; Danh mục
            </a>
            <div
              @click="toggleDropdown_danhmuc"
              class="navbar-dropdown is-boxed"
              v-show="isDropdownOpen_danhmuc"
            >
              <nuxt-link to="" class="navbar-item">
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="fa fa-globe"></i>
                </span>
                &ensp; Tỉnh / Thành phố
              </nuxt-link>
              <nuxt-link to="" class="navbar-item">
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="fa fa-h-square"></i>
                </span>
                &ensp; Quận / Huyện
              </nuxt-link>
              <nuxt-link to="" class="navbar-item">
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="fa fa-institution"></i>
                </span>
                &ensp; Xã / phường
              </nuxt-link>
              <hr class="navbar-divider" />
              <nuxt-link to="/danhmuc/baohiemxahoi" class="navbar-item">
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="fa fa-building"></i>
                </span>
                &ensp; Bảo hiểm xã hội
              </nuxt-link>
            </div>
          </div>
          <!-- Kê khai -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" @click="toggleDropdown_danhmuc">
              <span
                style="color: hsl(0deg, 0%, 100%)"
                class="icon is-small is-left"
              >
                <i class="fas fa-broom"></i>
              </span>
              &ensp; Kê khai
            </a>
            <div
              @click="toggleDropdown_danhmuc"
              class="navbar-dropdown is-boxed"
              v-show="isDropdownOpen_danhmuc"
            >
              <nuxt-link
                to="/nhanviendailythu/danhsachkekhai"
                class="navbar-item"
              >
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="far fa-file-pdf"></i>
                </span>
                &ensp; Danh sách kê khai
              </nuxt-link>
              <nuxt-link to="/nhanviendailythu/taokekhai" class="navbar-item">
                <span style="color: #3850b7" class="icon is-small is-left">
                  <i class="fas fa-file-signature"></i>
                </span>
                &ensp; Tạo kê khai
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div v-if="loggedIn" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" @click="toggleDropdown_user"
              ><img
                alt=""
                width="50"
                height="80"
                style="border-radius: 50%; border: 2px solid #ffd863"
              />
              &ensp; hi, {{ user.username }}!</a
            >
            <div
              @click="toggleDropdown_user"
              class="navbar-dropdown is-boxed"
              v-show="isDropdownOpen_user"
            >
              <a @click="isActive = true" class="navbar-item">
                <span class="icon is-small is-left" style="color: #f96854">
                  <i class="fas fa-address-card"></i>
                </span>
                &ensp; Hồ sơ cá nhân
              </a>
              <nuxt-link to="#" class="navbar-item">
                <span class="icon is-small is-left" style="color: #f96854">
                  <i class="fas fa-book"></i>
                </span>
                &ensp; Trợ giúp
              </nuxt-link>
              <hr class="navbar-divider" />
              <template v-if="loggedIn && user.role===1">
                <nuxt-link to="/admin/" class="navbar-item">
                  <span class="icon is-small is-left" style="color: #ca1f26">
                    <i class="fab fa-buysellads"></i>
                  </span>
                  &ensp; Quản trị viên
                </nuxt-link>
              </template>
              <a @click="logout()" class="navbar-item">
                <span class="icon is-small is-left" style="color: #f96854">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                &ensp; Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal info user-->
      <div class="">
        <div :class="{ 'is-active': isActive }" class="modal">
          <div class="modal-background"></div>
          <div class="modal-content modal-card-predata">
            <section class="modal-card-body box">
              <div v-if="loggedIn">
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <label class="label">Họ tên</label>
                      <div class="control">
                        <input
                          v-model="user.name"
                          class="input is-small"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="field">
                      <label class="label">Tên tài khoản</label>
                      <div class="control">
                        <input
                          v-model="user.username"
                          class="input is-small"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <label class="label">Tạo bởi</label>
                      <div class="control">
                        <input
                          v-model="user.createdBy"
                          class="input is-small"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="field">
                      <label class="label">Ảnh đại diện</label>
                      <div class="control" style="text-align: center">
                        <div id="preview" class="box">
                          <figure class="image is-128x128">
                            <img class="is-rounded" :src="user.avatar" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <button class="button is-small is-success is-fullwidth">
                      Cập nhật
                    </button>
                  </div>
                  <div class="column">
                    <button
                      @click="isActive = false"
                      class="button is-small is-danger is-fullwidth"
                    >
                      Thoát
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen_danhmuc: false,
      isDropdownOpen_user: false,
      activeMenu: "", // Thêm thuộc tính activeMenu để lưu trạng thái menu đang được sử dụng

      isActive: false,
    };
  },

  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
  },

  mounted() {},

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    toggleDropdown_danhmuc() {
      this.isDropdownOpen_danhmuc = !this.isDropdownOpen_danhmuc;
    },

    toggleDropdown_user() {
      this.isDropdownOpen_user = !this.isDropdownOpen_user;
    },

    async logout() {
      await this.$auth.logout(); // Đảm bảo rằng đăng xuất đã hoàn thành trước khi chuyển hướng
      this.$router.push("/login"); // Chuyển hướng đến trang login sau khi đăng xuất
    },
  },
};
</script>

<style lang="css" scoped>
.brand-title {
  font-size: 35px;
  font-weight: bold;
}

.navbar-brand {
  padding-right: 30px;
}

.avatar {
  margin-right: 5px;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  width: 50px;
  height: 50px;
}

.modal-card {
  width: 620px;
  height: 500px;
}

.navbar {
  min-height: 5rem !important;
}

.nested.dropdown {
  &:hover > .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    top: -15px;
    margin-left: 100%;
  }

  .dropdown-trigger {
    button {
      padding: 0px 0px;
      border: 0px;
      font-size: 14px;
      font-weight: 400;
      height: 2em;
    }
  }

  /* Định nghĩa màu nền cho navbar */
  .is-custom-color {
    background-color: red; /* Thay #your-color bằng mã màu bạn muốn sử dụng */
  }
}
</style>
