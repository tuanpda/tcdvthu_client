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
              <div class="column is-4">
                <input
                  v-model="masobhxh"
                  type="text"
                  class="input is-small"
                  placeholder="Mã số BHXH"
                />
              </div>
              <div class="column is-4">
                <input
                  v-model="tenlaodong"
                  type="text"
                  class="input is-small"
                  placeholder="Tên lao động"
                />
              </div>
              <div class="column">
                <button
                  @click="filter(1)"
                  class="button is-small is-success is-fullwidth"
                >
                  <span class="icon">
                    <i class="fas fa-search"></i>
                  </span>
                  <span>Tìm kiếm</span>
                </button>
              </div>
              <div class="column is">
                <button
                  @click="isActive = true"
                  class="button is-small is-primary is-fullwidth"
                >
                  <span class="icon">
                    <i class="fas fa-arrow-alt-circle-down"></i>
                  </span>
                  <span>Import Excel</span>
                </button>
              </div>
              <div class="column is">
                <button class="button is-small is-warning is-fullwidth">
                  <a
                    href="http://27.73.37.94:81/filemauimport/filemau_import_nguoitg.xlsx"
                    ><span class="icon">
                      <i class="fas fa-file-excel"></i>
                    </span>
                    <span>Tải Excel mẫu</span></a
                  >
                </button>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <div style="margin-bottom: 5px" v-if="sumrecord > 0">
                  <span style="font-weight: bold; color: #ff0000"
                    >Tìm được tất cả: {{ sumrecord }} bản ghi.</span
                  >
                </div>
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
    <!-- Biểu tượng loading -->
    <div v-if="isLoading" class="loading-overlay">
      <!-- Biểu tượng loading -->
      <div class="loading-spinner"></div>
      <span>waitting some minute ...</span>
    </div>

    <!-- modal import -->
    <div class="">
      <div :class="{ 'is-active': isActive }" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content modal-card box">
          <section class="modal-card-body">
            <div>
              <span style="font-weight: 800; font-size: 15px; color: #3cb371"
                >Import Người tham gia</span
              >
            </div>
            <div style="text-align: end">
              <button
                @click="exitImport = false"
                class="button is-small is-info"
              >
                Thoát
              </button>
            </div>

            <hr class="navbar-divider" />

            <div class="columns">
              <div class="column is-10">
                <div class="file is-small is-info has-name">
                  <label class="file-label">
                    <input
                      ref="fileInput"
                      @change="onFileChange"
                      class="file-input"
                      type="file"
                      name="resume"
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label"> Chọn file excel </span>
                    </span>
                    <span class="file-name">
                      {{ fileName }}
                    </span>
                  </label>
                </div>
              </div>
              <div class="column">
                <button
                  :disabled="!isImport"
                  @click="clickImport"
                  class="button is-small is-success"
                >
                  Import Dữ liệu
                </button>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div v-show="isshow == true">
                  <div style="text-align: center">
                    <span
                      style="font-size: small; font-weight: bold; color: red"
                      >{{ showcount }} / {{ showsuccess }}</span
                    >
                  </div>
                  <div>
                    <progress
                      id="progress-bar"
                      class="progress is-success"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>

            <div class="table_wrapper" v-if="ketQua.length > 0">
              <table
                class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
              >
                <thead style="font-weight: bold">
                  <tr style="font-size: small; background-color: #4169e1">
                    <td style="color: azure; text-align: center; width: 3%">
                      STT
                    </td>
                    <td style="color: azure; text-align: center">Mã số BHXH</td>
                    <td style="color: azure; text-align: center">Kết quả</td>
                    <td style="color: azure; text-align: center">Trạng thái</td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style="font-size: small"
                    v-for="(item, index) in ketQua"
                    :key="index"
                  >
                    <td style="text-align: center">
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.MaSoBhxh }}
                    </td>
                    <td style="text-align: center">
                      {{ item.message }}
                    </td>
                    <td style="text-align: center">
                      {{ item.status }}
                    </td>
                  </tr>
                </tbody>
              </table>
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
import * as XLSX from "xlsx";
const { DateTime } = require("luxon");
export default {
  name: "baohiemxahoi",
  middleware: "auth",
  mixins: [mixinDmBhxh],
  data() {
    return {
      data: [],
      currentPage: 1,
      totalPages: 1,
      masobhxh: "",
      tenlaodong: "",
      isLoading: false,
      sumrecord: 0,
      isActive: false,
      fileName: "",
      selectedFile: null,
      data_import: [],
      // đếm
      showcount: 0,
      showsuccess: 0,
      isshow: false,
      ketQua: [],
      isImport: false,
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

  mounted() {},

  methods: {
    async filter(page) {
      if (this.masobhxh === "" && this.tenlaodong === "") {
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
          title: `Bạn phải gõ ít nhất 1 thuộc tính trong từ khoá tìm kiếm`,
        });
        return;
      }
      try {
        this.sumrecord = 0;
        this.isLoading = true;
        const res = await this.$axios.get(
          `/api/nguoihuong/get-all-quanlylaodong-pagi?page=${page}&MaSoBhxh=${this.masobhxh}&HoTen=${this.tenlaodong}`
        );
        // console.log(res);
        if (res.data.results.length > 0) {
          this.sumrecord = res.data.info.count;
          this.data = res.data.results;
          this.totalPages = res.data.info.pages;
          this.currentPage = page; // Cập nhật trang hiện tại
          this.isLoading = false;
        } else {
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
      } catch (error) {
        this.isLoading = false;
        console.log(error);
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
          title: `Có lỗi xảy ra`,
        });
      }
    },

    // onFileChange_import(e) {
    //   if (!e.target.files[0]) {
    //     return;
    //   }
    //   // this.perproc = 0;
    //   this.fileName_import = e.target.files[0].name;
    //   this.selectedFile_import = e.target.files[0];

    //   if (
    //     this.selectedFile_import.type ==
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    //   ) {
    //     // console.log(this.selectedFile_import);
    //     //console.log(this.selectedFile.type);
    //   } else {
    //     this.$toasted.show("Chỉ chấp nhận file excel xlsx, 2007 + ", {
    //       duration: 2000,
    //       theme: "bubble",
    //     });
    //   }

    //   const files = e.target.files;
    //   const fileReader = new FileReader(); // construction function that can read the file content
    //   this.isLoading = true;
    //   fileReader.onload = (ev) => {
    //     try {
    //       const data = ev.target.result;
    //       const workbook = XLSX.read(data, {
    //         type: "binary", // binary
    //       });
    //       const wsname = workbook.SheetNames[0]; //take the first sheet
    //       const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //Get the data in this table

    //       let titles = Object.keys(ws[0]);
    //       // console.log(titles);

    //       const firstThreeTitles = titles.slice(0, 3);
    //       // console.log(firstThreeTitles);

    //       if (
    //         firstThreeTitles[0] == "STT_HSNS" &&
    //         firstThreeTitles[1] == "MaSoBhxh" &&
    //         firstThreeTitles[2] == "HoTen"
    //       ) {
    //         this.data_import = ws;
    //         // if (this.data_import.length < 0) {
    //         //   this.isLoading = true;
    //         // }
    //         this.data_import = this.data_import.map((item) => ({
    //           ...item,
    //           process: 0,
    //           statusImport: 0,
    //         }));
    //         // console.log(this.data_import.length);

    //         this.isLoading = false;
    //         this.isImport = true;
    //       } else {
    //         this.data_import = [];
    //         const Toast = Swal.mixin({
    //           toast: true,
    //           position: "top-end",
    //           showConfirmButton: false,
    //           timer: 2000,
    //           timerProgressBar: true,
    //           didOpen: (toast) => {
    //             toast.addEventListener("mouseenter", Swal.stopTimer);
    //             toast.addEventListener("mouseleave", Swal.resumeTimer);
    //           },
    //         });
    //         Toast.fire({
    //           icon: "error",
    //           title: `File không hợp lệ.`,
    //         });
    //         this.isLoading = false;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   // read file, trigger onload
    //   fileReader.readAsBinaryString(files[0]);
    // },

    async onFileChange_import(e) {
      if (!e.target.files[0]) {
        return;
      }
      // this.perproc = 0;
      this.fileName_import = e.target.files[0].name;
      this.selectedFile_import = e.target.files[0];

      // console.log(this.fileName_import);
      // console.log(this.selectedFile_import.name);

      if (
        this.selectedFile_import.type ==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        // console.log(this.selectedFile_import);
        //console.log(this.selectedFile.type);
      } else {
        this.$toasted.show("Chỉ chấp nhận file excel xlsx, 2007 + ", {
          duration: 2000,
          theme: "bubble",
        });
      }

      let data = new FormData();
      data.append(
        "file",
        this.selectedFile_import,
        this.selectedFile_import.name
      );

      try {
        this.isLoading = true;

        // Gửi file lên server
        const response = await this.$axios.post(
          "/api/nguoihuong/import-file",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // if (response.data.success) {
        //   Swal.fire({
        //     icon: "success",
        //     title: "Import thành công!",
        //     text: response.data.message,
        //   });
        // } else {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Import thất bại",
        //     text: response.data.error,
        //   });
        // }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: "Có lỗi xảy ra khi upload file.",
        });
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async onFileChange(e) {
      this.fileName = e.target.files[0];
      this.url = URL.createObjectURL(this.fileName);
      this.fileName = e.target.files[0].name;
      this.selectedFile = e.target.files[0];
      // console.log(this.selectedFile);

      let data = new FormData();
      data.append("file", this.selectedFile, this.selectedFile.name);

      const response = await this.$axios.post(
        "/api/nguoihuong/import-file",
        data
      );

      console.log(response);
    },

    exitImport() {
      this.data_import = [];
      this.fileName_import = "";
      this.selectedFile_import = null;
      this.isActive = false;
      this.ketQua = [];
    },

    async clickImport() {
      const nowInVietnam = DateTime.now().setZone("Asia/Ho_Chi_Minh");
      const formattedDate = nowInVietnam.toFormat("dd-MM-yyyy HH:mm:ss");

      // Cập nhật dữ liệu import với thời gian và người dùng hiện tại
      this.data_import = this.data_import.map((item) => ({
        ...item,
        ngayip: formattedDate,
        nguoiip: this.$auth.user.username,
      }));

      // Mảng lưu kết quả xử lý
      const results = [];

      // console.log(this.selected.length);
      const lengtData = this.data_import.length;
      // console.log(this.showcount);
      this.showsuccess = lengtData;
      this.isshow = true;
      const progressBar = document.getElementById("progress-bar");
      // console.log(progressBar);
      progressBar.value = this.showcount;
      progressBar.max = this.showsuccess;

      for (const item of this.data_import) {
        try {
          // Gửi dữ liệu từng bản ghi
          const res = await this.$axios.$post(
            "/api/nguoihuong/add-nguoithamgia",
            item
          );

          // Thêm kết quả vào mảng results
          if (res.success === 5) {
            results.push({
              MaSoBhxh: item.MaSoBhxh,
              message: `Mã số ${item.MaSoBhxh} đã tồn tại.`,
              status: "duplicate",
            });
          } else if (res.success === 1) {
            results.push({
              MaSoBhxh: item.MaSoBhxh,
              message: `Mã số ${item.MaSoBhxh} đã nhập thành công.`,
              status: "success",
            });
          } else {
            results.push({
              MaSoBhxh: item.MaSoBhxh,
              message: `Mã số ${item.MaSoBhxh} bị lỗi trong quá trình nhập.`,
              status: "error",
            });
          }

          this.showcount++;
          progressBar.value = this.showcount;
        } catch (error) {
          // Xử lý lỗi khi gọi API
          results.push({
            MaSoBhxh: item.MaSoBhxh,
            message: `Mã số ${item.MaSoBhxh} gặp lỗi kết nối: ${error.message}`,
            status: "error",
          });
        }
      }

      this.showcount = 0;
      this.showsuccess = 0;
      this.isshow = false;
      this.isImport = false;

      // Hiển thị kết quả xử lý cho người dùng
      // console.log("Kết quả xử lý:", results);
      this.ketQua = results;
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
@import "@/assets/customCss/common.css";

@import "@/assets/customCss/footerTable.css";

.modal-card {
  width: 850px;
  height: 550px;
}
</style>
