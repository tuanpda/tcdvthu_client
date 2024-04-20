<template>
  <div class="columns">
    <div class="column container">
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="control">
              <span style="color: #00947e" class="icon is-small is-left">
                <i class="fas fa-clipboard-check"></i>
              </span>
              <span style="font-weight: bold; color: #00947e"
                >Danh sách Kê khai BHXH BHYT</span
              >
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Chọn loại hình kê khai</label>
            <div class="control has-icons-left">
              <div class="select">
                <select @change="loaihinhChange($event)">
                  <!-- <option selected disabled>-- Chọn loại hình tham gia --</option> -->
                  <option
                    v-for="(item, index) in loaihinhtg"
                    :key="index"
                    :value="item.maloaihinhtg"
                  >
                    {{ item.maloaihinhtg }} - {{ item.tenloaihinhtg }}
                  </option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i style="color: #fed604" class="far fa-bookmark"></i>
              </div>
            </div>
          </div>
          <div class="column">
            <label class="label">Từ ngày</label
            ><input v-model="tungay" type="date" class="input" />
          </div>
          <div class="column">
            <label class="label">Đến ngày (Ngày biên lai)</label
            ><input
              v-model="denngay"
              @change="findDate"
              type="date"
              class="input"
            />
          </div>
          <div class="column">
            <label class="label">Hủy lọc</label
            ><button
              @click="danhsachkekhai"
              class="button is-danger is-fullwidth"
            >
              Refresh
            </button>
          </div>
        </div>

        <div style="margin-top: 20px">
          <div class="table_wrapper">
            <table
              class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            >
              <thead style="font-weight: bold">
                <tr style="">
                  <td style="text-align: center; width: 3%">STT</td>
                  <td style="text-align: center">Họ tên</td>
                  <td style="text-align: center">Mã số BHXH</td>
                  <td style="text-align: center">CCCD</td>
                  <td style="text-align: center">Điện thoại</td>
                  <td style="text-align: center">Phương án</td>
                  <!-- nếu ar bi v-if="isPhuongan === 'AR' || isPhuongan === 'BI'" -->
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <td style="text-align: center">Ngày sinh</td>
                    <td style="text-align: center">Giới tính</td>
                    <td style="text-align: center">Người thứ</td>
                    <td style="text-align: center">Tiền lương</td>
                    <td style="text-align: center">Số tiền</td>
                    <td style="text-align: center">Tỷ lệ NSĐP %</td>
                    <td style="text-align: center">Hỗ trợ khác %</td>
                    <td style="text-align: center">Từ ngày</td>
                  </template>
                  <!-- nếu is -->
                  <template v-else>
                    <td style="text-align: center">Hệ số</td>
                    <td style="text-align: center">Tỷ lệ đóng %</td>
                    <td style="text-align: center">Mức tiền đóng</td>
                    <td style="text-align: center">Phương thức đóng</td>
                    <td style="text-align: center">Số tháng</td>
                    <td style="text-align: center">Từ tháng</td>
                    <td style="text-align: center">Tiền tự nguyện đóng</td>
                    <td style="text-align: center">Tiền lãi</td>
                    <td style="text-align: center">Đối tượng</td>
                    <td style="text-align: center">Tỷ lệ NSNN hỗ trợ</td>
                    <td style="text-align: center">Tiền NSNN hỗ trợ</td>
                    <td style="text-align: center">Tỷ lệ NSĐP</td>
                    <td style="text-align: center">Tiền NSĐP</td>
                  </template>
                  <td style="text-align: center">Tỉnh / Thành phố</td>
                  <td style="text-align: center">Quận / Huyện</td>
                  <td style="text-align: center">Xã phường</td>
                  <td style="text-align: center">Tổ thôn</td>
                  <!-- nếu là is -->
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <td style="text-align: center">Bệnh viện tỉnh</td>
                    <td style="text-align: center">Bệnh viện</td>
                    <td style="text-align: center">Số tháng</td>
                    <td style="text-align: center">Mức hưởng BHYT</td>
                  </template>
                  <td style="text-align: center">Ghi chú</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data_kekhai" :key="index">
                  <td style="text-align: center; vertical-align: middle">
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{ item.hoten }}
                  </td>
                  <td style="text-align: center">
                    {{ item.masobhxh }}
                  </td>
                  <td style="text-align: center">
                    {{ item.cccd }}
                  </td>
                  <td style="text-align: center">
                    {{ item.dienthoai }}
                  </td>
                  <td style="text-align: center">
                    {{ item.tenphuongan }}
                  </td>
                  <!-- nếu ar bi v-if="isPhuongan === 'AR' || isPhuongan === 'BI'" -->
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <td style="text-align: center">
                      {{ formatISODateToDMY(item.ngaysinh) }}
                    </td>
                    <td style="text-align: center">
                      <template v-if="item.gioitinh === true">
                        <span>Nam</span>
                      </template>
                      <template v-else>
                        <span>Nữ</span>
                      </template>
                    </td>
                    <td style="text-align: center">
                      {{ item.nguoithu }}
                    </td>
                    <td style="text-align: center">
                      {{ formatCurrency(item.tienluongcs) }}
                    </td>
                    <td style="text-align: center">
                      {{ formatCurrency(item.sotien) }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tylengansachdiaphuong }}
                    </td>
                    <td style="text-align: center">
                      {{ item.hotrokhac }}
                    </td>
                    <td style="text-align: center">
                      {{ formatISODateToDMY(item.tungay) }}
                    </td>
                  </template>
                  <template v-else>
                    <td style="text-align: center">
                      {{ item.heso }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tyledong }}
                    </td>
                    <td style="text-align: center">
                      {{ formatCurrency(item.muctiendong) }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tenphuongthucdong }}
                    </td>
                    <td style="text-align: center">
                      {{ item.sothang }}
                    </td>
                    <td style="text-align: center">
                      {{ formatISODateToDMY(item.tuthang) }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tientunguyendong }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tienlai }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tendoiduong }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tylensnnht }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tiennsnnht }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tylensdp }}
                    </td>
                    <td style="text-align: center">
                      {{ item.tiennsdp }}
                    </td>
                  </template>
                  <!-- tỉnh-->
                  <td style="text-align: center">
                    {{ item.tentinh }}
                  </td>
                  <!-- quận huyện -->
                  <td style="">{{ item.tenquanhuyen }}</td>
                  <!-- xã phường -->
                  <td style="">{{ item.tenxaphuong }}</td>
                  <!-- tổ thôn -->
                  <td style="">
                    {{ item.tothon }}
                  </td>
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <!-- tỉnh bệnh viện -->
                    <td style="text-align: center">
                      {{ item.benhvientinh }}
                    </td>
                    <!-- bệnh viện -->
                    <td style="">
                      {{ item.tenbenhvien }}
                    </td>
                    <td style="text-align: center">
                      {{ item.sothang }}
                    </td>
                    <!-- mức hưởng BHYT -->
                    <td style="text-align: center">
                      {{ item.muchuongbhyt }}
                    </td>
                  </template>
                  <!-- ghi chú -->
                  <td style="">
                    {{ item.ghichu }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "DanhsachKekhaiPage",
  middleware: "auth", // middleware for authentication
  components: {},

  data() {
    return {
      data_kekhai: [],
      loaihinhtg: [
        {
          maloaihinhtg: "AR",
          tenloaihinhtg: "BHYT Hộ gia đình làm nông lâm MSTB",
        },
        {
          maloaihinhtg: "BI",
          tenloaihinhtg: "BHYT Hộ gia đình",
        },
        {
          maloaihinhtg: "IS",
          tenloaihinhtg: "BHXH Tự nguyện",
        },
      ],
      isPhuongan: "AR",
      maloaihinh: "AR",
      tenloaihinh: "BHYT Hộ gia đình làm nông lâm MSTB",
      tungay: "",
      denngay: "",
    };
  },

  mounted() {
    this.danhsachkekhai();
  },

  computed: {},

  methods: {
    formatISODateToDMY(isoDateString) {
      const date = new Date(isoDateString);

      // Lấy ngày, tháng và năm từ đối tượng Date
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      // Tạo chuỗi ngày tháng dd/mm/yyyy
      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    },

    formatCurrency(number) {
      return number.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },

    async danhsachkekhai() {
      // dm hưởng bhyt
      const res = await this.$axios.get(
        `/api/kekhai/getalldskkwithmalh?maloaihinh=${this.maloaihinh}`
      );
      // console.log(res);
      this.data_kekhai = res.data;
    },

    // chọn loại hình
    loaihinhChange(e) {
      this.data_kekhai = [];
      const selectedOption = e.target.value;
      const getLh = e.target.options[e.target.selectedIndex].text;
      this.isPhuongan = selectedOption;
      let position = getLh.split("-");
      if (position) {
        this.maloaihinh = position[0].trim();
        this.tenloaihinh = position[1].trim();
      }
      this.danhsachkekhai();
    },

    async findDate() {
      const get_Tungay = this.tungay.split("T")[0];
      const get_Denngay = this.denngay.split("T")[0];
      // console.log(get_Tungay, get_Denngay);
      const res = await this.$axios.get(
        `/api/kekhai/hskekhaifromtotungay?maloaihinh=${this.maloaihinh}&tungay=${get_Tungay}&denngay=${get_Denngay}`
      );
      // console.log(res);
      this.data_kekhai = res.data;
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
}

.input {
  min-width: 200px;
  /* Điều chỉnh độ rộng tùy ý */
}

.select {
  min-width: 200px;
  /* Điều chỉnh độ rộng tùy ý */
}

.pagination {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #ccc;
  color: #fff;
  cursor: pointer;
}

.pagination button.active {
  background-color: #cb4b10;
}

.field.is-tuanpda {
  display: flex;
  justify-content: flex-end;
}

.field.is-grouped-function {
  display: flex;
  justify-content: center;
}

.modal-card {
  width: 850px;
  height: auto;
}

/* Tùy chỉnh giao diện của input */
.custom-input {
  width: 50%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Tùy chỉnh giao diện của datalist */
datalist {
  position: absolute;
  width: 100%;
  max-height: 50px;
  /* Điều chỉnh chiều cao tối đa của datalist */
  overflow-y: auto;
  /* Cho phép cuộn nếu danh sách quá dài */
  border: 1px solid #ccc;
  border-radius: 1px;
  background-color: #fff;
  z-index: 1;
  /* Đảm bảo datalist hiển thị phía trên các phần tử khác */
}

/* Tùy chỉnh giao diện của các option trong datalist */
datalist option {
  padding: 8px;
  cursor: pointer;
}

/* Tùy chỉnh giao diện của option được chọn */
datalist option:checked {
  background-color: #f0f0f0;
}

/* Tùy chỉnh giao diện của option mặc định */
datalist option:not(:checked) {
  background-color: transparent;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 20px; */
}

.pagination-input {
  margin-right: 10px;
  /* Khoảng cách giữa input và phân trang */
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #ccc;
  color: #fff;
  cursor: pointer;
}

.pagination button.active {
  background-color: #cb4b10;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /* Mờ nền */
  z-index: 9999;
  /* Đặt vị trí cao hơn */
}

/* CSS của biểu tượng loading */
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  /* Màu đường viền của spinner */
  border-top: 4px solid red;
  /* Màu của đường viền phía trên */
  border-radius: 50%;
  /* Hình dạng của spinner */
  width: 30px;
  /* Chiều rộng của spinner */
  height: 30px;
  /* Chiều cao của spinner */
  animation: spin 1s linear infinite;
  /* Animation cho spinner */
  position: absolute;
  /* Đặt vị trí tuyệt đối */
  top: 50%;
  /* Đặt vị trí ở giữa theo chiều dọc */
  left: 50%;
  /* Đặt vị trí ở giữa theo chiều ngang */
  transform: translate(-50%, -50%);
  /* Dịch chuyển spinner về trung tâm */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  /* Góc quay ban đầu */
  100% {
    transform: rotate(360deg);
  }

  /* Góc quay cuối cùng */
}

#preview {
  display: flex;
  justify-content: left;
  align-items: left;
}

#preview img {
  max-width: 100px;
  max-height: 100px;
  padding: 5px;
}

input:focus {
  border-color: red; /* Đổi màu viền thành đỏ */
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); /* Thêm hiệu ứng bóng đổ */
}

select:focus {
  border-color: red; /* Đổi màu viền thành đỏ */
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); /* Thêm hiệu ứng bóng đổ */
}
</style>
