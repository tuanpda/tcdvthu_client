<template>
  <div>
    <div style="margin-top: 20px">
      <div class="columns">
        <div class="column">
          <div
            class="field is-grouped is-grouped-multiline is-justify-content-flex-end"
          >
            <p class="control">
              <button class="button is-small is-info">
                <span class="icon">
                  <i class="fas fa-print"></i>
                </span>
                <span>In C45</span>
              </button>
            </p>
            <p class="control">
              <button class="button is-small is-info">
                <span class="icon">
                  <i class="fas fa-file-import"></i>
                </span>
                <span>Import tờ khai</span>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="table_wrapper">
        <table
          class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
        >
          <thead style="font-weight: bold">
            <tr style="font-size: small; background-color: #fff8dc">
              <td style="text-align: center">Chức năng</td>
              <td style="text-align: center; width: 3%">STT</td>
              <td style="text-align: center">Mã số BHXH</td>
              <td style="text-align: center">Họ tên</td>
              <td style="text-align: center">Ngày sinh</td>
              <td style="text-align: center">Giới tính</td>
              <td style="text-align: center">CCCD</td>
              <td style="text-align: center">Điện thoại</td>
              <td style="text-align: center">Phương án</td>
              <td style="text-align: center">Mức lương đóng</td>
              <td style="text-align: center">Từ tháng (chỉ tháng)</td>
              <td style="text-align: center">Đối tượng đóng</td>
              <td style="text-align: center">Số tháng</td>
              <td style="text-align: center">Số tiền phải đóng</td>
              <td style="text-align: center">Tỉnh / Thành phố</td>
              <td style="text-align: center">Quận / Huyện</td>
              <td style="text-align: center">Xã phường</td>
              <td style="text-align: center">Tổ thôn</td>
              <!-- <td style="text-align: center">Bệnh viện tỉnh</td>
              <td style="text-align: center">Bệnh viện</td> -->
              <td style="text-align: center">Ghi chú</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td style="text-align: center; vertical-align: middle">
                <a @click="copyRow()">
                  <span class="icon is-small">
                    <i
                      style="color: hsl(153deg, 53%, 53%)"
                      class="fas fa-check-circle"
                    ></i>
                  </span>
                </a>
                &nbsp;
                <a @click="deleteRow(item)">
                  <span class="icon is-small">
                    <i style="color: red" class="far fa-trash-alt"></i>
                  </span>
                </a>
                &nbsp;
                <a @click="refreshItem(item)">
                  <span class="icon is-small">
                    <i style="color: #ffd863" class="fas fa-circle-notch"></i>
                  </span>
                </a>
              </td>
              <td style="text-align: center; vertical-align: middle">
                {{ index + 1 }}
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.masobhxh"
                  class="input is-small"
                  type="number"
                  ref="masobhxhInput"
                />
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.hoten"
                  class="input is-small"
                  type="text"
                  ref="nameInput"
                />
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.ngaysinh"
                  class="input is-small"
                  type="date"
                  ref="ngaysinhInput"
                />
              </td>
              <td style="text-align: center">
                <div class="select is-fullwidth is-small" ref="gioitinhSelect">
                  <select v-model="item.gioitinh">
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </div>
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.cccd"
                  class="input is-small"
                  type="number"
                  ref="cccdInput"
                />
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.dienthoai"
                  class="input is-small"
                  type="number"
                  ref="dienthoaiInput"
                />
              </td>
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="phuonganChange($event, index)"
                    ref="phuonganSelect"
                  >
                    <option selected disabled>- Chọn phương án -</option>
                    <option
                      v-for="(item, index) in item.info_phuongan"
                      :key="index"
                      :value="item.maphuongan"
                    >
                      {{ item.tenphuongan }}
                    </option>
                  </select>
                </div>
              </td>

              <td style="text-align: center">
                <input
                  v-model="item.muctiendong"
                  class="input is-small"
                  type="text"
                  v-mask="mask"
                />
              </td>
              <td style="text-align: center">
                <input
                  v-model="item.tuthang"
                  class="input is-small"
                  type="date"
                  ref="tungayInput"
                />
              </td>
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="doituongChange($event, index)"
                    ref="doituongSelect"
                  >
                    <option selected disabled>- Chọn đối tượng đóng -</option>
                    <option
                      v-for="(item, index) in item.doituong"
                      :key="index"
                      :value="item.madoituong"
                    >
                      {{ item.tendoituong }}
                    </option>
                  </select>
                </div>
              </td>
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="phuongthucdChange($event, index)"
                    ref="phuongthucdongSelect"
                  >
                    <option selected disabled>- Chọn phương thức đóng -</option>
                    <option
                      v-for="(item, index) in item.phuongthucdong"
                      :key="index"
                      :value="item.maphuongthuc"
                    >
                      {{ item.tenphuongthuc }}
                    </option>
                  </select>
                </div>
              </td>
              <td style="text-align: center">
                <input
                  v-mask="mask"
                  v-model="item.sotien"
                  class="input is-small"
                  style="font-weight: 800; color: red"
                  disabled
                />
              </td>
              <!-- tỉnh-->
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    v-model="item.info_tinh.matinh"
                    @change="provinceChange($event, index)"
                  >
                    <option
                      v-for="(dt, index) in dmtinhthanhpho"
                      :key="index"
                      :value="dt.matinh"
                    >
                      {{ dt.tentinh }}
                    </option>
                  </select>
                </div>
              </td>
              <!-- quận huyện -->
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="quanhuyenChange($event, index)"
                    ref="quanhuyenSelect"
                  >
                    <option selected disabled>- Chọn Quận huyện -</option>
                    <option
                      v-for="(dt, index) in item.info_huyen"
                      :key="index"
                      :value="dt.maquanhuyen"
                    >
                      {{ dt.tenquanhuyen }}
                    </option>
                  </select>
                </div>
              </td>
              <!-- xã phường -->
              <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="xaphuongChange($event, index)"
                    :disabled="isDisabled_Xaphuong"
                    ref="xaphuongSelect"
                  >
                    <option selected disabled>- Chọn tổ thôn -</option>
                    <option
                      v-for="(dt, index) in item.info_xaphuong"
                      :key="index"
                      :value="dt.maxaphuong"
                    >
                      {{ dt.tenxaphuong }}
                    </option>
                  </select>
                </div>
              </td>
              <!-- tổ thôn -->
              <td style="text-align: center">
                <input
                  v-model="item.tothon"
                  class="input is-small"
                  type="text"
                  ref="tothonInput"
                />
              </td>

              <!-- tỉnh bệnh viện -->
              <!-- <td style="text-align: center">
                <div class="select is-fullwidth is-small">
                  <select
                    @change="benhvienChange($event, index)"
                    v-model="item.info_tinh.matinh"
                  >
                    <option
                      v-for="(dt, index) in dmtinhthanhpho"
                      :key="index"
                      :value="dt.matinh"
                    >
                      {{ dt.tentinh }}
                    </option>
                  </select>
                </div>
              </td> -->
              <!-- bệnh viện -->
              <!-- <td style="text-align: center">
                <input
                  autoComplete="on"
                  list="hopSuggestions"
                  class="custom-input"
                  @change="hopChange($event, index)"
                  ref="hopInput"
                  style="min-width: 200px; height: 30px"
                />
                <datalist id="hopSuggestions">
                  <option
                    v-for="(item, index) in item.info_benhvien"
                    :key="index"
                  >
                    {{ item.mabenhvien }} - {{ item.tenbenhvien }}
                  </option>
                </datalist>
              </td> -->

              <!-- ghi chú -->
              <td style="text-align: center">
                <input
                  v-model="item.ghichu"
                  class="input is-small"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top: 10px">
        <button
          @click="addRow"
          style="margin-bottom: 3px"
          class="button is-info is-small"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
          <span>Thêm dòng</span>
        </button>

        <button
          @click="onSave"
          style="margin-bottom: 3px"
          class="button is-danger is-small"
        >
          <span class="icon is-small">
            <i class="fas fa-envelope-open-text"></i>
          </span>
          <span>Gửi Kê khai</span>
        </button>
      </div>
    </div>
    <!-- modal -->
    <div class="">
      <div :class="{ 'is-active': isActive }" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content modal-card-kekhai box">
          <section class="modal-card-kekhai-body">
            <div>
              <div style="text-align: end">
                <button
                  @click="isActive = false"
                  class="button is-small is-info"
                >
                  Thoát
                </button>
              </div>
            </div>
            <div>
              <div
                v-if="form_response_sucess.length > 0"
                style="margin-top: 20px"
              >
                <div class="table_wrapper">
                  <span
                    style="
                      font-weight: bold;
                      color: #00947e;
                      margin-bottom: 20px;
                    "
                    >-- Kê khai thành công !!! --</span
                  >
                  <table
                    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                  >
                    <thead>
                      <tr style="background-color: bisque; font-size: small">
                        <td style="text-align: center; font-weight: bold">
                          STT
                        </td>
                        <td style="text-align: center; font-weight: bold">
                          Trạng thái kê khai
                        </td>
                        <td style="text-align: center; font-weight: bold">
                          Họ tên
                        </td>
                        <td style="text-align: center; font-weight: bold">
                          Mã số BHXH
                        </td>
                        <td style="text-align: center; font-weight: bold">
                          Số điện thoại
                        </td>
                        <td style="text-align: center; font-weight: bold">
                          CCCD
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in form_response_sucess"
                        :key="index"
                        style="font-size: small"
                      >
                        <td style="text-align: center">{{ index + 1 }}</td>
                        <td
                          style="
                            text-align: center;
                            font-weight: bold;
                            color: #00947e;
                          "
                        >
                          Đăng ký thành công
                        </td>
                        <td>
                          {{ item.hoten }}
                        </td>
                        <td style="text-align: center">
                          {{ item.masobhxh }}
                        </td>
                        <td style="text-align: center">
                          {{ item.sodienthoai }}
                        </td>
                        <td style="text-align: center">
                          {{ item.cccd }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  v-if="form_response_false.length > 0"
                  class="table_wrapper"
                >
                  <span style="font-weight: bold; color: red"
                    >-- Kê khai lỗi !!! --</span
                  >
                  <table
                    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                  >
                    <thead>
                      <td style="text-align: center; font-weight: bold">STT</td>
                      <td style="text-align: center; font-weight: bold">
                        Trạng thái kê khai
                      </td>
                      <td style="text-align: center; font-weight: bold">
                        Họ tên
                      </td>
                      <td style="text-align: center; font-weight: bold">
                        Mã số BHXH
                      </td>
                      <td style="text-align: center; font-weight: bold">
                        Số điện thoại
                      </td>
                      <td style="text-align: center; font-weight: bold">
                        CCCD
                      </td>
                    </thead>
                    <tbody>
                      <tr v-for="(index, item) in form_response_false">
                        <td style="text-align: center">{{ index + 1 }}</td>
                        <td
                          style="
                            text-align: center;
                            font-weight: bold;
                            color: red;
                          "
                        >
                          Đăng ký KHÔNG thành công
                        </td>
                        <td>
                          {{ item.hoten }}
                        </td>
                        <td style="text-align: center">
                          {{ item.masobhxh }}
                        </td>
                        <td style="text-align: center">
                          {{ item.sodienthoai }}
                        </td>
                        <td style="text-align: center">
                          {{ item.cccd }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinDmBhxh } from "../../mixins/mixinDmBhxh";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
const currencyMask = createNumberMask({
  prefix: "",
  allowDecimal: true,
  includeThousandsSeparator: true,
  allowNegative: false,
});
import Swal from "sweetalert2";
export default {
  name: "calCastAR",
  middleware: "auth",
  mixins: [mixinDmBhxh],

  // nhận mã loại hình và tên loại hình từ page kekhai
  props: {
    maloaihinh: String,
    loaihinh: String,
  },

  data() {
    return {
      isActive: false,
      mask: currencyMask,
      items: [],
      phuongan: [
        {
          maphuongan: "TM",
          tenphuongan: "Tăng mới",
        },
        {
          maphuongan: "ON",
          tenphuongan: "Đóng tiếp",
        },
      ],
      luongcoso: 0,
      tylengansachtw: 0,
      tylenngansachdp: 0,
      tyledongbhyt: 0,
      chuanngheo: 0,
      tylediaphuonghotroIs: 0,
      tylehotrokhacIs: 0,
      hotrokhac: 0,
      matinh: "",
      tentinh: "",
      dmquanhuyen: [],
      dmbenhvien: [],
      checkXaphuongOpen: false, // khóa xã phường khi load form
      form_response_sucess: [],
      form_response_false: [],
    };
  },

  mounted() {},

  async created() {
    this.$on("danhmucs-loaded", () => {
      // console.log("Tất cả các danh mục đã được tải.");
      // console.log(this.loaihinhtg);
      // console.log(this.dmluongcs);
      // console.log(this.nguoithu);
      // console.log(this.phuongthucdong);
      // console.log(this.doituongdong);
      // console.log(this.dmtylehotro);
      // console.log(this.dmtinhthanhpho);
      // console.log(this.dmtyledongbhtn);
      // console.log(this.dmchuanngheo);
      // console.log(this.dmtylehotrodiaphuongis);
      if (this.dmluongcs.length > 0) {
        this.luongcoso = this.dmluongcs[0].luongcs;
      }
      if (this.dmtylehotro.length > 0) {
        this.tylengansachtw = this.dmtylehotro[0].tylengansachtw;
        this.tylenngansachdp = this.dmtylehotro[0].tylenngansachdp;
        this.hotrokhac = this.dmtylehotro[0].tylehotrokhac;
      }
      if (this.dmtyledongbhtn.length > 0) {
        this.tyledongbhyt = this.dmtyledongbhtn[0].tyledong;
      }
      if (this.dmchuanngheo.length > 0) {
        this.chuanngheo = this.dmchuanngheo[0].chuanngheo;
      }
      if (this.dmtylehotrodiaphuongis.length > 0) {
        this.tylediaphuonghotroIs =
          this.dmtylehotrodiaphuongis[0].tylediaphuong;
        this.tylehotrokhacIs = this.dmtylehotrodiaphuongis[0].tylekhac;
      }
    });

    if (this.$auth.loggedIn) {
      // Kiểm tra xem người dùng đã đăng nhập chưa
      // console.log("Thông tin người dùng:", this.$auth.user);
      this.matinh = this.$auth.user.matinh;
      this.tentinh = this.$auth.user.tentinh;

      const res_quanhuyen = await this.$axios.get(
        `/api/danhmucs/dmquanhuyenwithmatinh?matinh=${this.matinh}`
      );
      this.dmquanhuyen = res_quanhuyen.data;
      const res_benhvien = await this.$axios.get(
        `/api/danhmucs/dmbenhvienwithtinh?matinh=${this.matinh}`
      );
      this.dmbenhvien = res_benhvien.data;
    } else {
      console.log("Người dùng chưa đăng nhập.");
      // Chuyển hướng người dùng đến trang đăng nhập
      this.$router.push("/login");
    }
  },

  computed: {
    isDisabled_Xaphuong() {
      return this.checkXaphuongOpen == false;
    },
  },

  methods: {
    addRow() {
      try {
        this.items.push({
          matochuc: this.$auth.user.matochuc,
          tentochuc: this.$auth.user.tentochuc,
          madaily: this.$auth.user.madaily,
          tendaily: this.$auth.user.tendaily,
          // loại hình nhận từ props kekhai
          maloaihinh: this.maloaihinh,
          tenloaihinh: this.loaihinh,
          // info human
          masobhxh: "",
          hoten: "",
          ngaysinh: "",
          gioitinh: "",
          cccd: "",
          dienthoai: "",
          // ke khai tham gia
          info_phuongan: this.phuongan,
          maphuongan: "",
          tenphuongan: "",
          tienluongcs: this.luongcoso,
          tylengansachtw: this.tylengansachtw,
          tylenngansachdp: this.tylenngansachdp,
          hotrokhac: this.hotrokhac,
          tungay: "",
          phuongthucdong: this.phuongthucdong,
          maphuongthucdong: "",
          tenphuongthucdong: "",
          sothang: 0, // phương thức đóng 3 6 12
          sotien: 0, // tiền phải đóng
          info_tinh: { matinh: this.matinh, tentinh: this.tentinh }, // tỉnh mặc định sẽ load theo tên người dùng login
          matinh: this.matinh,
          tentinh: this.tentinh,
          info_huyen: this.dmquanhuyen,
          maquanhuyen: "",
          tenquanhuyen: "",
          info_xaphuong: [],
          maxaphuong: "",
          tenxaphuong: "",
          tothon: "",
          info_benhvien: this.dmbenhvien,
          benhvientinh: this.matinh,
          mabenhvien: "",
          tenbenhvien: "",
          ghichu: "",
          // phải kê vào để lưu CSDL những cái này không có trong loại hình này
          muchuongbhyt: "",
          doituong: this.doituongdong,
          madoituong: "",
          tendoituong: "",
          tuthang: "", // kiểu date
          nguoithu: 0,
          tylengansachdiaphuong: 0,
          tyledong: 0,
          muctiendong: 0,
          tientunguyendong: 0,
          tienlai: 0,
          tylensnnht: 0,
          tiennsnnht: 0, // float
          tylensdp: 0,
          tiennsdp: 0, //float
        });

        // console.log(this.items);
      } catch (error) {
        console.log(error);
      }
    },

    deleteRow(index) {
      this.items.splice(index, 1);
    },

    copyRow() {
      try {
        let newRow = {}; // Tạo một đối tượng mới để lưu trữ dòng mới

        // Nếu có ít nhất một dòng trong items
        if (this.items.length > 0) {
          // Sao chép dữ liệu của dòng trước đó
          const previousRow = this.items[this.items.length - 1];
          Object.assign(newRow, previousRow);
        }

        // Thêm dòng mới vào mảng items
        this.items.push(newRow);
      } catch (error) {
        console.error("Error adding row:", error);
      }
    },

    // Đối tượng đóng - IS - TÍNH TIỀN LUÔN
    async doituongChange(e, index) {
      const madoituong = e.target.value;
      const tendoituong = e.target.options[e.target.selectedIndex].text;
      this.items[index].madoituong = madoituong;
      this.items[index].tendoituong = tendoituong;
      // console.log(this.items[index].madoituong);
      // console.log(this.items[index].tendoituong);
    },

    // phương án
    async phuonganChange(e, index) {
      const maphuongan = e.target.value;
      const tenphuongan = e.target.options[e.target.selectedIndex].text;
      this.items[index].maphuongan = maphuongan;
      this.items[index].tenphuongan = tenphuongan;
    },

    // phương thức đóng
    async phuongthucdChange(e, index) {
      const maphuongthucdong = e.target.value;
      const tenphuongthucdong = e.target.options[e.target.selectedIndex].text;
      this.items[index].maphuongthucdong = maphuongthucdong;
      this.items[index].tenphuongthucdong = tenphuongthucdong;

      // tính số tiền phải nạp
      // console.log(this.items[index].muctiendong);
      // console.log(typeof(this.items[index].muctiendong));

      // ***  CÁC TỶ LỆ HỖ TRỢ ĐƯA VÀO DANH MỤC VÀ THAY ĐỔI THEO TỪNG ĐỊA PHƯƠNG
      // 1. this.tyledongbhyt (tỷ lệ đóng 22% .. thay đổi thì vào danh mục)
      // 2. this.chuanngeo (mức chuẩn nghèo do nhà nước quy định)
      // 3. this.tylediaphuonghotroIs (tỷ lệ này do địa phương - do tỉnh - từng nơi qy định)
      // 4. this.tylehotrokhacIs (các tỷ lệ khác đôi khi do từng huyện xin được hỗ trợ)

      // mức tiền đóng do lao động lựa chọn
      // cái này phải yêu cầu chọn chẵn tiền ví dụ 1.050.000 hoặc 1.300.000 không được lẻ như 1.020.000
      // khống chế < 20 lần lương cơ bản (<20*1.800.000)
      const mucDong = parseFloat(
        this.items[index].muctiendong.replace(/,/g, "")
      );
      // console.log(typeof mucDong);
      // console.log(mucDong);

      // công thức tính cần đưa danh mục
      // tỷ lệ đóng: 22%
      // chuẩn hộ nghèo: 1500000

      // lương cơ sở là 1800000
      // hạn chế không được nhập mức tiền đóng > luongcoso * 20 (lần)

      // công thức tính đóng hàng tháng háng
      // ((mức tiền lương chọn đóng * tỷ lệ đóng) -
      // (chuẩn hộ nghèo * tỷ lệ đóng * 10% (NSTW hỗ trợ cho đối tượng BT))) * số tháng
      // tách đối tượng đóng:

      let castMucdong = mucDong * (this.tyledongbhyt / 100);
      let castSubTwhotro = this.chuanngheo * (this.tyledongbhyt / 100);
      let castDiaphuonght =
        this.chuanngheo *
        (this.tyledongbhyt / 100) *
        (this.tylediaphuonghotroIs / 100);
      let castDiaphuonghtKhac =
        this.chuanngheo *
        (this.tyledongbhyt / 100) *
        (this.tylehotrokhacIs / 100);

      // console.log(castMucdong);
      // console.log(castSubTwhotro);
      // console.log(castDiaphuonght);

      // Bắt đầu tính tiền khi người dùng chọn số tháng nạp
      // Ở đây với mỗi đối tượng đóng được chọn thì sẽ có công thức tính khác nhau
      // console.log(this.items[index].madoituong);
      // console.log(this.doituongdong);
      if (this.items[index].madoituong === "BT") {
        let madoituong = "";
        for (let i = 0; i < this.doituongdong.length; i++) {
          const doituong = this.doituongdong[i];
          // CHÚNG TA TÌM TỶ LỆ HỖ TRỢ TƯƠNG ỨNG TẠI ĐÂY
          if (doituong.madoituong === "BT") {
            madoituong = doituong.tylehotro;
          }
        }

        // Bắt đầu tính tiền
        castSubTwhotro = castSubTwhotro * (madoituong / 100);
        let tienPhaidong =
          (castMucdong -
            castSubTwhotro -
            castDiaphuonght -
            castDiaphuonghtKhac) *
          parseFloat(this.items[index].maphuongthucdong);
        this.items[index].sotien = tienPhaidong;
        // console.log(this.items[index].sotien);
      } else if (this.items[index].madoituong === "CN") {
        let madoituong = "";
        for (let i = 0; i < this.doituongdong.length; i++) {
          const doituong = this.doituongdong[i];
          // CHÚNG TA TÌM TỶ LỆ HỖ TRỢ TƯƠNG ỨNG TẠI ĐÂY
          if (doituong.madoituong === "CN") {
            madoituong = doituong.tylehotro;
          }
        }

        // Bắt đầu tính tiền
        castSubTwhotro = castSubTwhotro * (madoituong / 100);
        let tienPhaidong =
          (castMucdong -
            castSubTwhotro -
            castDiaphuonght -
            castDiaphuonghtKhac) *
          parseFloat(this.items[index].maphuongthucdong);
        this.items[index].sotien = tienPhaidong;
      } else if (this.items[index].madoituong === "N") {
        let madoituong = "";
        for (let i = 0; i < this.doituongdong.length; i++) {
          const doituong = this.doituongdong[i];
          // CHÚNG TA TÌM TỶ LỆ HỖ TRỢ TƯƠNG ỨNG TẠI ĐÂY
          if (doituong.madoituong === "N") {
            madoituong = doituong.tylehotro;
          }
        }

        // Bắt đầu tính tiền
        castSubTwhotro = castSubTwhotro * (madoituong / 100);
        let tienPhaidong =
          (castMucdong -
            castSubTwhotro -
            castDiaphuonght -
            castDiaphuonghtKhac) *
          parseFloat(this.items[index].maphuongthucdong);
        this.items[index].sotien = tienPhaidong;
      } else if (this.items[index].madoituong === "NT") {
        let madoituong = "";
        for (let i = 0; i < this.doituongdong.length; i++) {
          const doituong = this.doituongdong[i];
          // CHÚNG TA TÌM TỶ LỆ HỖ TRỢ TƯƠNG ỨNG TẠI ĐÂY
          if (doituong.madoituong === "NT") {
            madoituong = doituong.tylehotro;
          }
        }

        // Bắt đầu tính tiền
        castSubTwhotro = castSubTwhotro * (madoituong / 100);
        let tienPhaidong =
          (castMucdong - castSubTwhotro - castDiaphuonghtKhac) *
          parseFloat(this.items[index].maphuongthucdong);
        this.items[index].sotien = tienPhaidong;
      }
    },

    // tỉnh thành phố
    async provinceChange(e, index) {
      // lấy thông tin thay đổi từ người dùng select
      const matinh = e.target.value;
      const tentinh = e.target.options[e.target.selectedIndex].text;
      // lấy dữ liệu quận huyện từ mã tỉnh đã được chọn
      try {
        const response = await this.$axios.get(
          `/api/danhmucs/dmquanhuyenwithmatinh?matinh=${matinh}`
        );
        // bind dữ liệu vào dữ liệu select của items để cho từng item sử dụng
        this.items[index].info_huyen = response.data;
        this.items[index].matinh = matinh;
        this.items[index].tentinh = tentinh;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // quận huyện
    async quanhuyenChange(e, index) {
      const maquanhuyen = e.target.value;
      const tenquanhuyen = e.target.options[e.target.selectedIndex].text;
      this.items[index].maquanhuyen = maquanhuyen;
      this.items[index].tenquanhuyen = tenquanhuyen;
      try {
        const response = await this.$axios.get(
          `/api/danhmucs/dmxaphuongwithmahuyen?maquanhuyen=${maquanhuyen}`
        );
        if (response.data.length > 0) {
          this.items[index].info_xaphuong = response.data;
          this.checkXaphuongOpen = true;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // xã phường
    async xaphuongChange(e, index) {
      const maxaphuong = e.target.value;
      const tenxaphuong = e.target.options[e.target.selectedIndex].text;
      this.items[index].maxaphuong = maxaphuong;
      this.items[index].tenxaphuong = tenxaphuong;
    },

    // tỉnh bệnh viện
    async benhvienChange(e, index) {
      const matinh = e.target.value;
      this.items[index].benhvientinh = matinh;
      try {
        const response = await this.$axios.get(
          `/api/danhmucs/dmbenhvienwithtinh?matinh=${matinh}`
        );
        if (response.data.length > 0) {
          this.items[index].info_benhvien = response.data;
          this.checkXaphuongOpen = true;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // thông tin bệnh viện
    async hopChange(event, index) {
      const selectedOption = event.target.value;
      let position = selectedOption.split("-");
      if (position) {
        this.items[index].mabenhvien = position[0].trim();
        this.items[index].tenbenhvien = position[1].trim();
      }
    },

    // check mã số bhxh
    isValidMasoBHXH(masobhxh) {
      // Loại bỏ tất cả các ký tự không phải số
      const cleanedCCCD = masobhxh.replace(/\D/g, "");
      // Kiểm tra độ dài của CCCD và số đầu tiên
      return cleanedCCCD.length === 10;
    },

    // check phone number
    isValidPhoneNumber(phoneNumber) {
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      return cleanedPhoneNumber.length === 10;
    },

    // check số cccd
    isValidCCCD(cccd) {
      // Loại bỏ tất cả các ký tự không phải số
      const cleanedCCCD = cccd.replace(/\D/g, "");
      // Kiểm tra độ dài của CCCD và số đầu tiên
      return cleanedCCCD.length === 12 && cleanedCCCD.charAt(0) === "0";
    },

    async checkFormData() {
      for (let i = 0; i < this.items.length; i++) {
        if (!this.items[i].masobhxh) {
          this.$toasted.show("Thiếu mã số BHXH", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.masobhxhInput[i]) {
            this.$refs.masobhxhInput[i].focus();
          }
          return false;
        }

        if (!this.isValidMasoBHXH(this.items[i].masobhxh)) {
          this.$toasted.show("Mã số BHXH không hợp lệ", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.masobhxhInput[i]) {
            this.$refs.masobhxhInput[i].focus();
          }
          return false;
        }

        if (!this.items[i].hoten) {
          this.$toasted.show("Thiếu họ tên", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.nameInput[i]) {
            this.$refs.nameInput[i].focus();
          }
          return false;
        }

        if (this.items[i].ngaysinh == "") {
          this.$toasted.show("Thiếu ngày sinh", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.ngaysinhInput[i]) {
            this.$refs.ngaysinhInput[i].focus();
          }
          return false;
        }

        if (!this.items[i].gioitinh) {
          this.$toasted.show("Chọn giới tính", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.gioitinhSelect[i]) {
            this.$refs.gioitinhSelect[i].focus();
          }
          return false;
        }

        if (!this.items[i].cccd) {
          this.$toasted.show("Thiếu CCCD", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.cccdInput[i]) {
            this.$refs.cccdInput[i].focus();
          }
          return false;
        }

        if (!this.isValidCCCD(this.items[i].cccd)) {
          this.$toasted.show("CCD không hợp lệ", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.cccdInput[i]) {
            this.$refs.cccdInput[i].focus();
          }
          return false;
        }

        if (!this.items[i].dienthoai) {
          this.$toasted.show("Thiếu điện thoại", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.dienthoaiInput[i]) {
            this.$refs.dienthoaiInput[i].focus();
          }
          return false;
        }

        if (!this.isValidPhoneNumber(this.items[i].dienthoai)) {
          this.$toasted.show("Số điện thoại không hợp lệ", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.dienthoaiInput[i]) {
            this.$refs.dienthoaiInput[i].focus();
          }
          return false;
        }

        if (!this.items[i].maphuongan || !this.items[i].tenphuongan) {
          this.$toasted.show("Chọn một phương án", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.phuonganSelect[i]) {
            this.$refs.phuonganSelect[i].focus();
          }
          return false;
        }

        if (!this.items[i].maphuongthucdong || !this.items[i].phuongthucdong) {
          this.$toasted.show("Thiếu phương thức đóng", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.phuongthucdongSelect[i]) {
            this.$refs.phuongthucdongSelect[i].focus();
          }
          return false;
        }

        if (!this.items[i].maquanhuyen || !this.items[i].tenquanhuyen) {
          this.$toasted.show("Thiếu quận huyện", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.quanhuyenSelect[i]) {
            this.$refs.quanhuyenSelect[i].focus();
          }
          return false;
        }

        if (!this.items[i].maxaphuong || !this.items[i].tenxaphuong) {
          this.$toasted.show("Thiếu xã phường", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.xaphuongSelect[i]) {
            this.$refs.xaphuongSelect[i].focus();
          }
          return false;
        }

        if (!this.items[i].tothon) {
          this.$toasted.show("Thiếu tổ thôn", {
            duration: 3000,
            theme: "bubble",
          });
          if (this.$refs.tothonInput[i]) {
            this.$refs.tothonInput[i].focus();
          }
          return false;
        }
      }
      // Nếu tất cả thông tin đều hợp lệ, trả về true để cho phép quá trình lưu dữ liệu
      return true;
    },


    async onSave() {
      if (this.items.length <= 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: "Chưa có bản ghi nào !",
        });
        return;
      } else {
        // Kiểm tra dữ liệu trước khi ghi
        const isDataValid = await this.checkFormData();
        if (!isDataValid) {
          // Dừng quá trình lưu dữ liệu nếu dữ liệu không hợp lệ
          return;
        }

        const result = await Swal.fire({
          title: `Xác nhận gửi hồ sơ kê khai ?`,
          showDenyButton: true,
          confirmButtonText: "Xác nhận",
          denyButtonText: `Hủy gửi`,
        });
        if (result.isConfirmed) {
          const current = new Date();
          try {
            for (let i = 0; i < this.items.length; i++) {
              this.items[i].sotien = parseFloat(
                this.items[i].sotien.replace(/,/g, "")
              );
              this.items[i].muctiendong = parseFloat(
                this.items[i].muctiendong.replace(/,/g, "")
              );
              // info add db
              this.items[i].createdAt = current;
              this.items[i].createdBy = this.$auth.user.username;
              this.items[i].updatedAt = "";
              this.items[i].updatedBy = "";

              // Loại bỏ dữ liệu không cần thiết bằng destructuring
              const {
                info_benhvien,
                info_huyen,
                info_phuongan,
                info_tinh,
                info_xaphuong,
                phuongthucdong,
                ...itemWithout
              } = this.items[i];

              const result = await this.$axios.post(
                `api/kekhai/add-kekhai`,
                itemWithout
              );
              // console.log(result);
              if (result.status == 200) {
                if (!this.form_response_sucess[i]) {
                  this.form_response_sucess[i] = {}; // Tạo mới nếu chưa tồn tại
                }
                // Cập nhật form_response dựa trên response
                this.form_response_sucess[i].trangthai = result.status; // Đặt trạng thái thành true
                // Cập nhật các thông tin khác từ response
                const responseData = result.data; // Dữ liệu từ response
                this.form_response_sucess[i].hoten = responseData.hoten;
                this.form_response_sucess[i].masobhxh = responseData.masobhxh;
                this.form_response_sucess[i].sodienthoai =
                  responseData.dienthoai;
                this.form_response_sucess[i].cccd = responseData.cccd;
              } else {
                if (!this.form_response_false[i]) {
                  this.form_response_false[i] = {}; // Tạo mới nếu chưa tồn tại
                }
                // Cập nhật form_response dựa trên response
                this.form_response_false[i].trangthai = result.status; // Đặt trạng thái thành true
                // Cập nhật các thông tin khác từ response
                const responseData = result.data; // Dữ liệu từ response
                this.form_response_false[i].hoten = responseData.hoten;
                this.form_response_false[i].masobhxh = responseData.masobhxh;
                this.form_response_false[i].sodienthoai =
                  responseData.dienthoai;
                this.form_response_false[i].cccd = responseData.cccd;
              }
            }
          } catch (error) {
            // console.log(error);
            this.isLoading = false;
          }
          this.isActive = true;
          this.items = [];
        }
      }
    },
  },
};
</script>

<style scoped lang="css">
@import "@/assets/customCss/common.css";
</style>
