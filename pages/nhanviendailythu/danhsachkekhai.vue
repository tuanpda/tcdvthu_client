<template>
  <div class="column">
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
            <div class="select is-small">
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
          ><input @change="findDate" v-model="tungay" type="date" class="input is-small" />
        </div>
        <div class="column">
          <label class="label">Đến ngày (Ngày biên lai)</label
          ><input
            v-model="denngay"
            @change="findDate"
            type="date"
            class="input is-small"
          />
        </div>
        <div class="column">
          <label class="label">Tìm mã số BHXH</label
          ><input v-model="masobhxh" type="text" class="input is-small" />
        </div>
      </div>

      <div style="margin-top: 20px">
        <div class="table_wrapper">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <div v-show="maloaihinh == 'AR'">
              <DataTableAr :data="data_kekhai" />
            </div>
            <div v-show="maloaihinh == 'BI'">
              <DataTableBI :data="data_kekhai" />
            </div>
            <div v-show="maloaihinh == 'IS'">
              <DataTableIS :data="data_kekhai" />
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import DataTableAr from "@/components/table/DataTableAr";
import DataTableBI from "@/components/table/DataTableBI";
import DataTableIS from "@/components/table/DataTableIS";
export default {
  name: "DanhsachKekhaiPage",
  middleware: "auth", // middleware for authentication
  components: {
    DataTableAr,
    DataTableBI,
    DataTableIS
  },

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
      masobhxh: "",
      madaily: this.$auth.user.madaily,
    };
  },

  mounted() {
    this.danhsachkekhai();
  },

  computed: {},

  methods: {
    

    async danhsachkekhai() {
      const res = await this.$axios.get(
        `/api/kekhai/getallkekhaiwithuser?madaily=${this.madaily}&maloaihinh=${this.maloaihinh}`
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
        `/api/kekhai/hskekhaifromtotungay?maloaihinh=${this.maloaihinh}&madaily=${this.madaily}&tungay=${get_Tungay}&denngay=${get_Denngay}`
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
