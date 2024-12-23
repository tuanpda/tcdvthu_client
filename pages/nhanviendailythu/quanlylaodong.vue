<template>
  <div class="column">
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="control">
            <span style="color: #ff0000" class="icon is-small is-left">
              <i class="fab fa-earlybirds"></i>
            </span>
            <span style="font-weight: bold; color: #ff8c00"
              >Quản lý lao động</span
            >
          </div>

          <div style="margin-top: 20px">
            <div class="columns">
              <div class="column">
                <label class="label">Mã số BHXH</label
                ><input
                  v-model="masobhxh"
                  type="text"
                  class="input is-small"
                  placeholder="Mã số BHXH"
                />
              </div>
              <div class="column">
                <label class="label">Tên lao động</label
                ><input
                  v-model="tenlaodong"
                  type="text"
                  class="input is-small"
                  placeholder="Tên lao động"
                />
              </div>
              <div class="column is-2">
                <label class="label">Tìm kiếm</label
                ><button
                  @click="filter"
                  class="button is-small is-success is-fullwidth"
                >
                  <span class="icon">
                    <i class="fas fa-search"></i>
                  </span>
                  <span>Tìm kiếm</span>
                </button>
              </div>
              <div class="column is-2">
                <label class="label">Refresh</label
                ><button
                  @click="getData(1)"
                  class="button is-small is-danger is-fullwidth"
                >
                  <span class="icon">
                    <i class="fa fa-refresh"></i>
                  </span>
                  <span>Hủy lọc</span>
                </button>
              </div>
            </div>
            <div class="columns">
              <div class="column is-2">
                <button class="button is-small is-info is-fullwidth">
                  <span class="icon">
                    <i class="fas fa-arrow-alt-circle-down"></i>
                  </span>
                  <span>Import Excel</span>
                </button>
              </div>
              <div class="column is-2">
                <button
                  @click="getData(1)"
                  class="button is-small is-info is-fullwidth"
                >
                  <span class="icon">
                    <i class="fas fa-file-excel"></i>
                  </span>
                  <span>Tải Excel mẫu</span>
                </button>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <div class="table_wrapper">
                  <table
                    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                  >
                    <thead style="font-weight: bold">
                      <tr style="font-size: small; background-color: #4169e1">
                        <td style="color: azure; text-align: center; width: 3%">
                          STT
                        </td>
                        <td style="color: azure; text-align: center">Họ tên</td>
                        <td style="color: azure; text-align: center">
                          Mã số BHXH
                        </td>
                        <td style="color: azure; text-align: center">
                          Ngày sinh
                        </td>
                        <td style="color: azure; text-align: center">
                          Giới tính
                        </td>
                        <td style="color: azure; text-align: center">CCCD</td>
                        <td style="color: azure; text-align: center">
                          Số điện thoại
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style="font-size: small"
                        v-for="(item, index) in data"
                        :key="index"
                      >
                        <td style="text-align: center">
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ item.HoTen }}
                        </td>
                        <td style="text-align: center">
                          {{ item.MaSoBhxh }}
                        </td>
                        <td style="text-align: center">
                          {{ item.NgaySinh }}
                        </td>
                        <td style="text-align: center">
                          {{ item.GioiTinh }}
                        </td>
                        <td style="text-align: center">
                          {{ item.Cmnd }}
                        </td>
                        <td style="text-align: center">
                          {{ item.DienThoai }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- Phân trang -->
                <div v-if="data.length > 0" style="margin-top: 10px">
                  <nav
                    class="pagination is-centered is-rounded"
                    role="navigation"
                    aria-label="pagination"
                  >
                    <!-- Nút trang đầu tiên -->
                    <button
                      :disabled="currentPage === 1"
                      @click="goToPage(1)"
                      class="pagination-previous button is-info is-light is-small"
                    >
                      Đầu tiên
                    </button>

                    <!-- Nút Previous -->
                    <button
                      :disabled="currentPage === 1"
                      @click="goToPreviousPage"
                      class="pagination-previous button is-info is-light is-small"
                    >
                      Trang trước
                    </button>

                    <!-- Nút Next -->
                    <button
                      :disabled="currentPage === totalPages"
                      @click="goToNextPage"
                      class="pagination-next button is-danger is-light is-small"
                    >
                      Trang tiếp
                    </button>

                    <!-- Nút trang cuối cùng -->
                    <button
                      :disabled="currentPage === totalPages"
                      @click="goToPage(totalPages)"
                      class="pagination-next button is-danger is-light is-small"
                    >
                      Cuối cùng
                    </button>

                    <ul class="pagination-list">
                      <!-- Hiển thị các nút phân trang -->
                      <li v-for="page in visiblePages" :key="page">
                        <button
                          :class="[
                            'pagination-link',
                            { 'is-current': page === currentPage },
                            'is-small',
                          ]"
                          @click="goToPage(page)"
                        >
                          {{ page }}
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Loading Data -->
    <div class="">
      <div :class="{ 'is-active': isActiveLoading }" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content modal-card-predata">
          <section class="modal-card-body">
            <div>
              <span style="font-size: small; font-weight: bold; color: #00947e"
                >Đang load dữ liệu - Xin chờ đợi ....</span
              >
            </div>
            <div>
              <progress class="progress is-small is-danger" max="100">
                15%
              </progress>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinDmBhxh } from "../../mixins/mixinDmBhxh";
import Swal from "sweetalert2";
export default {
  name: "baohiemxahoi",
  middleware: "auth",
  mixins: [mixinDmBhxh],
  data() {
    return {
      isActiveLoading: false,
      data: [],
      currentPage: 1,
      totalPages: 1,
      masobhxh: "",
      tenlaodong: "",
    };
  },

  computed: {
    visiblePages() {
      // Trả về một mảng các số trang mà bạn muốn hiển thị
      const pages = [];
      const maxVisiblePages = 10; // Số lượng trang hiển thị tối đa

      let startPage = Math.max(
        1,
        this.currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },

  async created() {
    this.$on("danhmucs-loaded", () => {
      //   console.log("Tất cả các danh mục đã được tải.");
      // console.log(this.loaihinhtg);
      //   console.log(this.dmluongcs);
      //   console.log(this.nguoithu);
      //   console.log(this.phuongthucdong);
      //   console.log(this.doituongdong);
    });
  },

  mounted() {
    this.getData(1); // Tải dữ liệu cho trang đầu tiên
  },

  methods: {
    async getData(page) {
      const res = await this.$axios.get(
        `/api/nguoihuong/get-all-quanlylaodong-pagi?page=${page}`
      );
      this.data = res.data.results;
      this.totalPages = res.data.info.pages;
      this.currentPage = page; // Cập nhật trang hiện tại
    },

    async filter() {
      if (this.masobhxh !== "") {
        this.tenlaodong === "";
        this.data = this.data.filter(
          (person) => person.MaSoBhxh === this.masobhxh
        );
      } else if (this.tenlaodong !== "") {
        this.masobhxh === "";
        this.data = this.data.filter(
          (person) => person.HoTen === this.tenlaodong.trim()
        );
      }

      // Nếu không tìm thấy kết quả
      if (this.data.length === 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: `Không tìm thấy dữ liệu`,
        });
      }
    },

    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.getData(this.currentPage - 1);
      }
    },

    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.getData(this.currentPage + 1);
      }
    },

    goToPage(page) {
      this.getData(page); // Di chuyển đến trang được chỉ định
    },
  },
};
</script>

<style scoped lang="css">
.table_wrapper {
  display: block;
  overflow: scroll;
  white-space: nowrap;
  position: sticky;
  left: 0;
  height: auto;
}

.pagination {
  margin-top: 1em;
}
</style>
