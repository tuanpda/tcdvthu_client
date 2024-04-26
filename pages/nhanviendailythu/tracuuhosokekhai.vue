<template>
  <div class="column">
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="control">
            <span style="color: #00947e" class="icon is-small is-left">
              <i class="far fa-calendar-alt"></i>
            </span>
            <span style="font-weight: bold; color: #00947e"
              >Tra cứu hồ sơ kê khai</span
            >
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <label class="label">Kỳ Kê khai</label>
          <input
            v-model="kykekhai"
            @blur="validateMonthYear"
            type="text"
            placeholder="MM/YYYY"
            class="input is-small"
          />
        </div>
        <div class="column">
          <label class="label">Đợt Kê khai</label>
          <div class="input-group">
            <input
              type="number"
              min="1"
              max="12"
              class="input is-small"
              placeholder="Đợt kê khai của hồ sơ"
              v-model="dotkekhai"
            />
          </div>
        </div>
        <div class="column">
          <label class="label">Ngày kê khai</label
          ><input v-model="ngaykekhai" type="date" class="input is-small" />
        </div>
        <div class="column">
          <label class="label">Số hồ sơ</label
          ><input
            v-model="sohoso"
            type="text"
            class="input is-small"
            placeholder="Số hồ sơ đã nạp"
          />
        </div>
        <div class="column">
          <label class="label">Tìm kiếm</label
          ><button @click="filterData()" class="button is-small is-success">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>Tìm kiếm</span>
          </button>
          <button class="button is-small is-danger">
            <span class="icon">
              <i class="fa fa-refresh"></i>
            </span>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div style="margin-top: 20px">
        <div class="table_wrapper">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead style="font-weight: bold">
              <tr style="font-size: small; background-color: #fff8dc">
                <td style="text-align: center; width: 3%">STT</td>
                <td style="text-align: center">Số hồ sơ</td>
                <td style="text-align: center">Đợt kê khai</td>
                <td style="text-align: center">Kỳ kê khai</td>
                <td style="text-align: center">Ngày kê khai</td>
                <td style="text-align: center">Trạng thái</td>
                <td style="text-align: center">Xem hồ sơ</td>
                <td style="text-align: center">Xuất mẫu VT/VNPT</td>
              </tr>
            </thead>
            <tbody>
              <tr
                style="font-size: small"
                v-for="(item, index) in data_kekhai"
                :key="index"
              >
                <td style="text-align: center">{{ index + 1 }}</td>
                <td style="text-align: center">{{ item.sohoso }}</td>
                <td style="text-align: center">{{ item.dotkekhai }}</td>
                <td style="text-align: center">{{ item.kykekhai }}</td>
                <td style="text-align: center">{{ item.ngaykekhai }}</td>
                <td style="text-align: center">{{ item.trangthai }}</td>
                <td style="text-align: center">
                  <a
                    ><span class="icon">
                      <i
                        style="color: #00947e"
                        class="far fa-file-pdf"
                      ></i> </span
                  ></a>
                </td>
                <td style="text-align: center">
                  <a @click="xuatmauVtVnpt(item)"
                    ><span class="icon">
                      <i
                        style="color: #00947e"
                        class="far fa-file-excel"
                      ></i> </span
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- modal xuất file execl -->
      <div class="">
          <div :class="{ 'is-active': isActive }" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content modal-card box">
              <section class="modal-card-body">
                <div style="text-align: end">
                  <button
                    @click="isActive = false"
                    class="button is-small is-info"
                  >
                    Thoát
                  </button>
                </div>

                <div>

                </div>
                
              </section>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const { DateTime } = require("luxon");
export default {
  name: "DanhsachKekhaiPage",
  middleware: "auth", // middleware for authentication
  components: {},

  data() {
    return {
      data_kekhai: [],
      isActive: false,
      // new code
      kykekhai: "",
      dotkekhai: "",
      ngaykekhai: "",
      sohoso: "",
      dailyview: this.$auth.user.madaily,
    };
  },

  mounted() {
    this.getDateTime();
  },

  computed: {},

  methods: {
    validateMonthYear() {
      const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; // Định dạng MM/YYYY
      if (!regex.test(this.kykekhai)) {
        this.kykekhai = ""; // Xóa giá trị nếu không đúng định dạng
        alert("Định dạng không đúng. Vui lòng nhập MM/YYYY.");
      }
    },

    getDateTime() {
      const nowInVietnam = DateTime.now().setZone("Asia/Ho_Chi_Minh");
      const kyKeKhai = nowInVietnam.toFormat("MM/yyyy");

      // Lấy các phần tử riêng lẻ
      const year = nowInVietnam.year; // Năm
      const month = nowInVietnam.month; // Tháng
      const day = nowInVietnam.day; // Ngày
      const hour = nowInVietnam.hour; // Giờ
      const minute = nowInVietnam.minute; // Phút
      const second = nowInVietnam.second; // Giây

      this.kykekhai = kyKeKhai;
    },

    formatCurrency(number) {
      return number.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },

    async filterData() {
      const res = await this.$axios.get(
        `/api/kekhai/kykekhai-search-series?kykekhai=${this.kykekhai}`
      );
      // console.log(res.data.kekhai);
      if (res.status === 200) {
        this.data_kekhai = res.data.kekhai;
      }
    },

    async xuatmauVtVnpt(item){
      this.isActive = true;
      console.log(item);
    },
  },
};
</script>

<style scoped lang="css">
@import "@/assets/customCss/common.css";
@import "@/assets/customCss/footerTable.css";
</style>
