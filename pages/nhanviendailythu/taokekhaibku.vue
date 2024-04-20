<template>
  <div class="column">
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="control">
            <span style="color: #ff0000" class="icon is-small is-left">
              <i class="fas fa-file-signature"></i>
            </span>
            <span style="font-weight: bold; color: #ff8c00"
              >Kê khai BHXH BHYT</span
            >
          </div>
        </div>
      </div>

      <div style="margin-top: 20px">
        <div>
          <div class="titleKk">
            <hr class="line" />
            <div class="topleft">
              <span style="color: red; font-weight: 700">1.</span> Thông tin đại
              lý
            </div>
          </div>
          <div class="columns">
            <div class="column">Thông tin đăng nhập của đại lý</div>
            <div class="column">
              <div class="control has-icons-left">
                <div class="select is-small is-fullwidth">
                  <select @change="loaihinhChange($event)">
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
          </div>
        </div>

        <div style="margin-top: 30px">
          <div class="titleKk">
            <hr class="line" />
            <div class="topleft">
              <span style="color: red; font-weight: 700">2.</span> Thông tin
              người nạp tiền
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div style="display: flex; align-items: center">
                <div style="margin-right: 10px">
                  <label class="labelFix">Họ tên người nạp tiền</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Tỉnh LH</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Địa chỉ liên hệ</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
            </div>
            <div class="column">
              <div style="display: flex; align-items: center">
                <div style="margin-right: 10px">
                  <label class="labelFix">Số CCCD</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Huyện LH</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Ngày nộp</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="date" class="input is-small" />
                </div>
              </div>
            </div>
            <div class="column">
              <div style="display: flex; align-items: center">
                <div style="margin-right: 10px">
                  <label class="labelFix">Số điện thoại</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Xã LH</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-top: 15px">
                <div style="margin-right: 10px">
                  <label class="labelFix">Địa chỉ liên hệ</label>
                </div>
                <div style="flex-grow: 1">
                  <input type="text" class="input is-small" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 50px">
          <div class="titleKk">
            <hr class="line" />
            <div class="topleft">
              <span style="color: red; font-weight: 700">3.</span> Nghiệp vụ
            </div>
          </div>
          <div class="columns">
            <div class="column is-3">
              <div style="display: flex; align-items: center">
                <div style="margin-right: 10px">
                  <label class="labelFix">Đối tượng tham gia</label>
                </div>
                <div style="flex-grow: 1">
                  <input
                    type="text"
                    class="input is-small"
                    v-model="isPhuongan"
                  />
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div style="display: flex; align-items: center">
                <div style="margin-right: 10px">
                  <label class="labelFix">Lương cơ sở</label>
                </div>
                <div style="flex-grow: 1">
                  <input
                    type="text"
                    class="input is-small"
                    placeholder="1.800.000 VNĐ"
                  />
                </div>
              </div>
            </div>
          </div>
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
                <p class="control">
                  <button
                    @click="activeModalAdd"
                    class="button is-small is-info"
                  >
                    <span class="icon">
                      <i class="fas fa-plus"></i>
                    </span>
                    <span>Thêm mới</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ArTable /> 

        <div style="margin-top: 20px">
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
                  <td style="text-align: center">CCCD</td>
                  <td style="text-align: center">Giới tính</td>
                  <td style="text-align: center">Điện thoại</td>
                  <td style="text-align: center">Phương án</td>
                  <!-- nếu ar bi v-if="isPhuongan === 'AR' || isPhuongan === 'BI'" -->
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <td v-if="isPhuongan == 'BI'" style="text-align: center">
                      Người thứ
                    </td>
                    <td style="text-align: center">Tiền lương</td>
                    <td v-if="isPhuongan === 'AR'" style="text-align: center">
                      Tỷ lệ NSTW %
                    </td>
                    <td v-if="isPhuongan === 'AR'" style="text-align: center">
                      Tỷ lệ NSĐP %
                    </td>
                    <td style="text-align: center">Từ ngày</td>
                    <td style="text-align: center">Số tháng</td>
                    <td style="text-align: center">Số tiền phải đóng</td>
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
                  </template>
                  <td style="text-align: center">Ghi chú</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td style="text-align: center; vertical-align: middle">
                    <a>
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
                        <i
                          style="color: #ffd863"
                          class="fas fa-circle-notch"
                        ></i>
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
                    <input
                      v-model="item.cccd"
                      class="input is-small"
                      type="number"
                      ref="cccdInput"
                    />
                  </td>
                  <td style="text-align: center">
                    <div
                      class="select is-fullwidth is-small"
                      ref="gioitinhSelect"
                    >
                      <select v-model="item.gioitinh">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
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
                  <!-- nếu ar bi v-if="isPhuongan === 'AR' || isPhuongan === 'BI'" -->
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <td v-if="isPhuongan == 'BI'" style="text-align: center">
                      <div class="select is-fullwidth is-small">
                        <select
                          @change="nguoithuChange($event, index)"
                          ref="nguoithuSelect"
                          @blur="calculateTongtien(index)"
                        >
                          <option selected disabled>
                            - Chọn người thứ ? -
                          </option>
                          <option
                            v-for="(item, index) in item.info_nguoithu"
                            :key="index"
                            :value="item.manguoithu"
                          >
                            {{ item.nguoithu }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td style="text-align: center">
                      <!-- <div class="select is-fullwidth is-small">
                        <select
                          @change="luongcsChange($event, index)"
                          ref="luongcsSelect"
                        >
                          <option selected disabled>- Chọn lương CS -</option>
                          <option
                            v-for="(item, index) in item.info_tienluong"
                            :key="index"
                            :value="item.luongcs"
                          >
                            {{ item.luongcs }}
                          </option>
                        </select>
                      </div> -->
                      <input
                        v-model="item.tienluongcs"
                        class="input is-small"
                        type="text"
                        ref="tylengansachdiaphuongInput"
                      />
                    </td>
                    <td v-if="isPhuongan === 'AR'" style="text-align: center">
                      <input
                        v-model="item.tylengansachtw"
                        class="input is-small"
                        type="number"
                        ref="tylengansachdiaphuongInput"
                      />
                    </td>
                    <td v-if="isPhuongan === 'AR'" style="text-align: center">
                      <input
                        v-model="item.tylenngansachdp"
                        class="input is-small"
                        type="number"
                        ref="hotrokhacInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tungay"
                        class="input is-small"
                        type="date"
                        ref="tungayInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <div class="select is-fullwidth is-small">
                        <select
                          @change="phuongthucdChange_Arbi($event, index)"
                          ref="phuongthucdongSelect"
                        >
                          <option selected disabled>
                            - Chọn phương thức đóng -
                          </option>
                          <option
                            v-for="(item, index) in item.phuongthucdongthang"
                            :key="index"
                            :value="item.maphuongthucdong"
                          >
                            {{ item.tenphuongthucdong }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.sotien"
                        class="input is-small"
                        disabled
                      />
                    </td>
                  </template>
                  <template v-else>
                    <td style="text-align: center">
                      <input
                        v-model="item.heso"
                        class="input is-small"
                        type="number"
                        ref="hesoInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tyledong"
                        class="input is-small"
                        type="number"
                        ref="tyledongInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.muctiendong"
                        class="input is-small"
                        type="number"
                        ref="muctiendongInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <div class="select is-fullwidth is-small">
                        <select
                          @change="phuongthucdChange($event, index)"
                          ref="phuongthucdongSelect"
                        >
                          <option selected disabled>
                            - Chọn phương thức đóng -
                          </option>
                          <option
                            v-for="(item, index) in item.phuongthucdong"
                            :key="index"
                            :value="item.maphuongthucdong"
                          >
                            {{ item.tenphuongthucdong }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.sothang"
                        class="input is-small"
                        type="number"
                        ref="sothangInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tuthang"
                        class="input is-small"
                        type="date"
                        ref="tuthangInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tientunguyendong"
                        class="input is-small"
                        type="number"
                        ref="tientunguyendongInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tienlai"
                        class="input is-small"
                        type="number"
                        ref="tienlaiInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <div class="select is-fullwidth is-small">
                        <select
                          @change="doituongChange($event, index)"
                          ref="doituongSelect"
                        >
                          <option selected disabled>
                            - Chọn đối tượng đóng -
                          </option>
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
                      <input
                        v-model="item.tylensnnht"
                        type="number"
                        class="input is-small"
                        ref="tylensnnhtInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tiennsnnht"
                        class="input is-small"
                        type="number"
                        ref="tiennsnnhttInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tylensdp"
                        class="input is-small"
                        type="number"
                        ref="tylensdpInput"
                      />
                    </td>
                    <td style="text-align: center">
                      <input
                        v-model="item.tiennsdp"
                        class="input is-small"
                        type="number"
                        ref="tiennsdpInput"
                      />
                    </td>
                  </template>
                  <!-- tỉnh-->
                  <td style="text-align: center">
                    <div class="select is-fullwidth is-small">
                      <select
                        v-model="item.info_tinh.matinh"
                        @change="provinceChange($event, index)"
                      >
                        <option
                          v-for="(dt, index) in dm_Tinhs"
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
                  <template v-if="isPhuongan === 'AR' || isPhuongan === 'BI'">
                    <!-- tỉnh bệnh viện -->
                    <td style="text-align: center">
                      <div class="select is-fullwidth is-small">
                        <select
                          @change="benhvienChange($event, index)"
                          v-model="item.info_tinh.matinh"
                        >
                          <option
                            v-for="(dt, index) in dm_Tinhs"
                            :key="index"
                            :value="dt.matinh"
                          >
                            {{ dt.tentinh }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <!-- bệnh viện -->
                    <td style="text-align: center">
                      <!-- <div class="select is-fullwidth">
                      <select>
                        <option v-for="(dt, index) in item.info_benhvien" :key="index" :value="dt.mabenhvien">
                          {{ dt.tenbenhvien }}
                        </option>
                      </select>
                    </div> -->
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
                    </td>
                  </template>

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
      </div>

      <!-- modal -->
      <div class="">
        <div :class="{ 'is-active': isActive }" class="modal">
          <div class="modal-background"></div>
          <div class="modal-content modal-card box">
            <section class="modal-card-body">
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
                  style="margin-top: 20px"
                  v-if="form_response_sucess.length > 0"
                >
                  <div class="table_wrapper">
                    <span
                      style="
                        font-weight: bold;
                        color: #00947e;
                        margin-bottom: 10px;
                      "
                      >-- Kê khai thành công !!! --</span
                    >
                    <table
                      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                    >
                      <thead>
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
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in form_response_sucess"
                          :key="index"
                        >
                          <td style="text-align: center">{{ index + 1 }}</td>
                          <td
                            style="
                              text-align: center;
                              font-weight: bold;
                              color: #00947e;
                            "
                          >
                            <!-- {{ item.trangthai }} -->
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
                    class="table_wrapper"
                    v-if="form_response_false.length > 0"
                  >
                    <span style="font-weight: bold; color: red"
                      >-- Kê khai lỗi !!! --</span
                    >
                    <table
                      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                    >
                      <thead>
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
  </div>
</template>

<script>
import ArTable from '@/components/nghiepvu/caculCastAR'
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
  name: "KekhaiPage",
  middleware: "auth", // middleware for authentication
  components: {
    ArTable
  },

  data() {
    return {
      items: [],
      users_data: [],
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
      phuongan: [
        {
          maphuongan: "TM",
          tenphuongan: "Tăng mới",
        },
        {
          maphuongan: "ON",
          tenphuongan: "Đóng tiếp",
        },
        {
          maphuongan: "DC",
          tenphuongan: "Điều chỉnh mức đóng",
        },
      ],
      nguoithu: [
        {
          manguoithu: 1,
          nguoithu: "Mặc định",
        },
        {
          manguoithu: 2,
          nguoithu: "Người thứ 2",
        },
        {
          manguoithu: 3,
          nguoithu: "Người thứ 3",
        },
        {
          manguoithu: 4,
          nguoithu: "Người thứ 4",
        },
        {
          manguoithu: 5,
          nguoithu: "Từ người thứ 5",
        },
      ],
      phuongthucdong: [
        {
          maphuongthucdong: "1T",
          tenphuongthucdong: "1 tháng",
        },
        {
          maphuongthucdong: "3T",
          tenphuongthucdong: "3 tháng",
        },
        {
          maphuongthucdong: "6T",
          tenphuongthucdong: "6 tháng",
        },
        {
          maphuongthucdong: "12T",
          tenphuongthucdong: "12 tháng",
        },
        {
          maphuongthucdong: "D1L",
          tenphuongthucdong: "Đóng 1 lần cho những năm về sau",
        },
        {
          maphuongthucdong: "D1LCT",
          tenphuongthucdong: "Đóng 1 lần cho các năm còn thiếu",
        },
      ],
      phuongthucdongthang: [
        {
          maphuongthucdong: "3",
          tenphuongthucdong: "3 tháng",
        },
        {
          maphuongthucdong: "6",
          tenphuongthucdong: "6 tháng",
        },
        {
          maphuongthucdong: "12",
          tenphuongthucdong: "12 tháng",
        },
      ],
      doituong: [
        {
          madoituong: "BT",
          tendoituong: "Bình thường",
        },
        {
          madoituong: "CN",
          tendoituong: "Cận nghèo",
        },
        {
          madoituong: "N",
          tendoituong: "Nghèo",
        },
        {
          madoituong: "NT",
          tendoituong: "Ngoại tỉnh",
        },
      ],
      isPhuongan: "AR",
      maloaihinh: "AR",
      tenloaihinh: "BHYT Hộ gia đình làm nông lâm MSTB",
      dmmahuongbhyt: [],
      dmluongcs: [],
      dmquanhuyen: [],
      dmbenhvien: [],
      checkXaphuongOpen: false,
      isLoading: false,
      isActive: false,
      isActive_addOn: false,
      // form response
      form_response_sucess: [],
      form_response_false: [],
      luongcoso: 0,
    };
  },

  mounted() {
    this.loadDanhmuc();
  },

  created() {
    // this.getUsers(); // Gọi action để lấy dữ liệu từ Vuex
    this.getdmTinhs();
    // this.getdmQuanhuyens();
  },

  computed: {
    // load data from the store
    ...mapState("modules/danhmucs", ["dm_Tinhs"]),

    isDisabled_Xaphuong() {
      return this.checkXaphuongOpen == false;
    },
  },

  methods: {
    // ...mapActions("modules/users", ["getUsers"]),
    ...mapActions("modules/danhmucs", ["getdmTinhs"]),
    // ...mapActions("modules/danhmucs", ["getdmQuanhuyens"]),

    async loadDanhmuc() {
      // dm hưởng bhyt
      // const res_mahuongbhyt = await this.$axios.get(
      //   `/api/danhmucs/dmmahuongbhyt`
      // );
      // this.dmmahuongbhyt = res_mahuongbhyt.data;
      // danh mục lương cs
      const res_luongcs = await this.$axios.get(`/api/danhmucs/dmluongcs`);
      this.dmluongcs = res_luongcs.data;
      this.luongcoso = this.dmluongcs[0].luongcs;
      // console.log(this.luongcoso);
      // danh mục huyện mặc định
      const res_quanhuyen = await this.$axios.get(
        `/api/danhmucs/dmquanhuyenwithmatinh?matinh=42`
      );
      this.dmquanhuyen = res_quanhuyen.data;
      // danh mục bệnh viện mặc định
      const res_benhvien = await this.$axios.get(
        `/api/danhmucs/dmbenhvienwithtinh?matinh=42`
      );
      this.dmbenhvien = res_benhvien.data;
    },

    addRow() {
      try {
        this.items.push({
          maloaihinh: this.maloaihinh,
          tenloaihinh: this.tenloaihinh,
          hoten: "",
          masobhxh: "",
          cccd: "",
          dienthoai: "",
          info_phuongan: this.phuongan,
          maphuongan: "",
          tenphuongan: "", // trước field này thì giống nhau
          ngaysinh: "", // phần bắt đầu ar - bi
          gioitinh: "",
          info_nguoithu: this.nguoithu,
          nguoithu: 0,
          info_tienluong: this.dmluongcs,
          tienluongcs: this.luongcoso,
          sotien: 0,
          tylengansachtw: 30, //sau đưa vào danh muc
          tylenngansachdp: 20,
          hotrokhac: 0,
          tungay: "", // kết thúc ar - bi
          heso: 0, // bắt đầu is
          tyledong: 22,
          muctiendong: 0,
          phuongthucdongthang: this.phuongthucdongthang,
          phuongthucdong: this.phuongthucdong,
          maphuongthucdong: "",
          tenphuongthucdong: "",
          sothang: 0, // có ở cả 3 loại hình
          tuthang: "",
          tientunguyendong: 0,
          tienlai: 0,
          doituong: this.doituong,
          madoituong: "",
          tendoiduong: "",
          tylensnnht: 0,
          tiennsnnht: 0,
          tylensdp: 0,
          tiennsdp: 0, // kết thúc is
          info_tinh: { matinh: "42", tentinh: "Hà Tĩnh" },
          matinh: "42",
          tentinh: "Hà Tĩnh",
          info_huyen: this.dmquanhuyen,
          maquanhuyen: "",
          tenquanhuyen: "",
          info_xaphuong: [],
          maxaphuong: "",
          tenxaphuong: "",
          tothon: "",
          info_benhvien: this.dmbenhvien, // chỉ có ar bi
          benhvientinh: "42", // chỉ có ar bi
          mabenhvien: "", // chỉ có ar bi
          tenbenhvien: "", // chỉ có ar bi
          muchuongbhyt: "", // chỉ có ar bi
          ghichu: "",
        });
      } catch (error) {
        console.log(error);
      }
    },

    deleteRow(index) {
      this.items.splice(index, 1);
    },

    refreshItem(index) {},

    // chọn loại hình
    loaihinhChange(e) {
      this.items = [];
      const selectedOption = e.target.value;
      const getLh = e.target.options[e.target.selectedIndex].text;
      this.isPhuongan = selectedOption;
      let position = getLh.split("-");
      if (position) {
        this.maloaihinh = position[0].trim();
        this.tenloaihinh = position[1].trim();
      }
    },

    // phương án
    async phuonganChange(e, index) {
      const maphuongan = e.target.value;
      const tenphuongan = e.target.options[e.target.selectedIndex].text;
      this.items[index].maphuongan = maphuongan;
      this.items[index].tenphuongan = tenphuongan;
    },

    // người thứ ?
    async nguoithuChange(e, index) {
      const manguoithu = e.target.value;
      const nguoithu = e.target.options[e.target.selectedIndex].text;
      this.items[index].nguoithu = manguoithu;
    },

    // lương cs
    async luongcsChange(e, index) {
      const luongcs = e.target.value;
      this.items[index].tienluongcs = luongcs;
    },

    // phương thức đóng - IS
    async phuongthucdChange(e, index) {
      const maphuongthucdong = e.target.value;
      const tenphuongthucdong = e.target.options[e.target.selectedIndex].text;
      this.items[index].maphuongthucdong = maphuongthucdong;
      this.items[index].tenphuongthucdong = tenphuongthucdong;
    },

    // phương thức đóng - AR BI
    async phuongthucdChange_Arbi(e, index) {
      const maphuongthucdong = e.target.value;
      const tenphuongthucdong = e.target.options[e.target.selectedIndex].text;
      this.items[index].maphuongthucdong = maphuongthucdong;
      this.items[index].tenphuongthucdong = tenphuongthucdong;
      if (this.isPhuongan == "AR") {
        const cast =
          parseFloat(this.items[index].tienluongcs) *
          0.045 *
          parseInt(this.items[index].maphuongthucdong);
        const castTW =
          parseFloat(this.items[index].tienluongcs) *
          0.045 *
          parseInt(this.items[index].maphuongthucdong) *
          0.3;
        const castDP =
          parseFloat(this.items[index].tienluongcs) *
          0.045 *
          parseInt(this.items[index].maphuongthucdong) *
          0.2;
        const castPN = cast - (castTW + castDP);
        console.log("Số tiền nạp: ", cast);
        console.log("TW HT: ", castTW);
        console.log("ĐP HT: ", castDP);
        console.log("Phải nạp: ", castPN);

        this.items[index].sotien = castPN;
      }
      if (this.isPhuongan == "BI") {
        const cast =
          parseFloat(this.items[index].tienluongcs) *
          0.045 *
          parseInt(this.items[index].maphuongthucdong);
        if (this.items[index].nguoithu === "1") {
          this.items[index].sotien = cast;
        } else if (this.items[index].nguoithu === "2") {
          this.items[index].sotien = cast * 0.7;
        } else if (this.items[index].nguoithu === "3") {
          this.items[index].sotien = cast * 0.6;
        } else if (this.items[index].nguoithu === "4") {
          this.items[index].sotien = cast * 0.5;
        } else {
          this.items[index].sotien = cast * 0.4;
        }
      }
    },

    // đối tượng đóng - IS
    async doituongChange(e, index) {
      const madoituong = e.target.value;
      const tendoituong = e.target.options[e.target.selectedIndex].text;
      this.items[index].madoituong = madoituong;
      this.items[index].tendoituong = tendoituong;
      // console.log(this.items);
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
          // this.checkXaphuongOpen = true;
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

        if (this.isPhuongan === "AR" || this.isPhuongan === "BI") {
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

          if (!this.items[i].nguoithu && this.isPhuongan == "BI") {
            this.$toasted.show("Chọn người thứ ?", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.nguoithuSelect[i]) {
              this.$refs.nguoithuSelect[i].focus();
            }
            return false;
          }

          if (!this.items[i].tienluongcs) {
            this.$toasted.show("Chọn lương cơ sở", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.luongcsSelect[i]) {
              this.$refs.luongcsSelect[i].focus();
            }
            return false;
          }

          // if (!this.items[i].tylensdp) {
          //   this.$toasted.show("Thiếu tỷ lệ địa phương", {
          //     duration: 3000,
          //     theme: "bubble",
          //   });
          //   if (this.$refs.tylensdpInput[i]) {
          //     this.$refs.tylensdpInput[i].focus();
          //   }
          //   return false;
          // }

          // if (!this.items[i].hotrokhac) {
          //   this.$toasted.show("Thiếu hỗ trợ khác", {
          //     duration: 3000,
          //     theme: "bubble",
          //   });
          //   if (this.$refs.hotrokhacInput[i]) {
          //     this.$refs.hotrokhacInput[i].focus();
          //   }
          //   return false;
          // }

          if (!this.items[i].tungay) {
            this.$toasted.show("Thiếu từ ngày", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.tungayInput[i]) {
              this.$refs.tungayInput[i].focus();
            }
            return false;
          }

          // if (!this.items[i].sothang) {
          //   this.$toasted.show("Thiếu số tháng", {
          //     duration: 3000,
          //     theme: "bubble",
          //   });
          //   if (this.$refs.sothangInput[i]) {
          //     this.$refs.sothangInput[i].focus();
          //   }
          //   return false;
          // }
        }

        if (this.isPhuongan === "IS") {
          // if (!this.items[i].tungay) {
          //   this.$toasted.show("Thiếu hệ số", {
          //     duration: 3000,
          //     theme: "bubble",
          //   });
          //   if (this.$refs.hesoInput[i]) {
          //     this.$refs.hesoInput[i].focus();
          //   }
          //   return false;
          // }

          // if (!this.items[i].tyledongInput) {
          //   this.$toasted.show("Thiếu hệ số", {
          //     duration: 3000,
          //     theme: "bubble",
          //   });
          //   if (this.$refs.tyledongInput[i]) {
          //     this.$refs.tyledongInput[i].focus();
          //   }
          //   return false;
          // }

          if (!this.items[i].muctiendong) {
            this.$toasted.show("Thiếu mức tiền đóng", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.muctiendongInput[i]) {
              this.$refs.muctiendongInput[i].focus();
            }
            return false;
          }

          if (
            !this.items[i].maphuongthucdong ||
            !this.items[i].phuongthucdong
          ) {
            this.$toasted.show("Thiếu phương thức đóng", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.phuongthucdongSelect[i]) {
              this.$refs.phuongthucdongSelect[i].focus();
            }
            return false;
          }

          if (!this.items[i].tuthang) {
            this.$toasted.show("Thiếu từ tháng", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.tuthangInput[i]) {
              this.$refs.tuthangInput[i].focus();
            }
            return false;
          }

          if (!this.items[i].tuthang) {
            this.$toasted.show("Thiếu từ tháng", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.tuthangInput[i]) {
              this.$refs.tuthangInput[i].focus();
            }
            return false;
          }

          if (!this.items[i].madoituong || !this.items[i].tendoituong) {
            this.$toasted.show("Thiếu đối tượng đóng", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.doituongSelect[i]) {
              this.$refs.doituongSelect[i].focus();
            }
            return false;
          }
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

        if (this.isPhuongan === "AR" || this.isPhuongan === "BI") {
          if (!this.items[i].mabenhvien || !this.items[i].tenbenhvien) {
            this.$toasted.show("Chọn bệnh viện", {
              duration: 3000,
              theme: "bubble",
            });
            if (this.$refs.hopInput[i]) {
              this.$refs.hopInput[i].focus();
            }
            return false;
          }
        }
      }

      // Nếu tất cả thông tin đều hợp lệ, trả về true để cho phép quá trình lưu dữ liệu
      return true;
    },

    calculateTongtien(index) {
      // console.log(index);
      const luongcs = this.items[index].tienluongcs;
      const sothang = this.items[index].sothang;
      // console.log(typeof this.items[index].nguoithu);
      let tongtien = 0;
      if (this.isPhuongan === "AR") {
        if (this.items[index].nguoithu === "1") {
          tongtien = luongcs * 0.045 * 0.5 * sothang;
        } else if (this.items[index].nguoithu === "2") {
          tongtien = luongcs * 0.045 * 0.5 * sothang * 0.7;
        } else if (this.items[index].nguoithu === "3") {
          tongtien = luongcs * 0.045 * 0.5 * sothang * 0.6;
        } else if (this.items[index].nguoithu === "4") {
          tongtien = luongcs * 0.045 * 0.5 * sothang * 0.5;
        } else {
          tongtien = luongcs * 0.045 * 0.5 * sothang * 0.4;
        }
      } else if (this.isPhuongan === "BI") {
        if (this.items[index].nguoithu === "1") {
          tongtien = luongcs * 0.045 * sothang;
        } else if (this.items[index].nguoithu === "2") {
          tongtien = luongcs * 0.045 * sothang * 0.7;
        } else if (this.items[index].nguoithu === "3") {
          tongtien = luongcs * 0.045 * sothang * 0.6;
        } else if (this.items[index].nguoithu === "4") {
          tongtien = luongcs * 0.045 * sothang * 0.5;
        } else {
          tongtien = luongcs * 0.045 * sothang * 0.4;
        }
      }

      this.items[index].sotien = tongtien;
      // console.log(this.items[index].sotien);
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
      }

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
            this.items[i].maloaihinh = this.maloaihinh;
            this.items[i].tenloaihinh = this.tenloaihinh;
            // info add db
            this.items[i].createdAt = current;
            this.items[i].createdBy = this.$auth.user.username;
            this.items[i].updatedAt = "";
            this.items[i].updatedBy = "";
            const result = await this.$axios.post(
              `api/kekhai/add-kekhai`,
              this.items[i]
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
              this.form_response_sucess[i].sodienthoai = responseData.dienthoai;
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
              this.form_response_false[i].sodienthoai = responseData.dienthoai;
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
    },

    activeModalAdd() {
      this.isActive_addOn = true;
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
  width: 1450px;
  height: auto;
}

/* Tùy chỉnh giao diện của input */
.custom-input {
  width: 50%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
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

.titleKk {
  position: relative;
}

.topleft {
  position: absolute;
  top: -13px;
  font-size: 16px;
  display: inline-block;
  /* padding-left: 20px; */
  padding-right: 15px;
  background-color: white;
  font-weight: bold;
  color: #008b8b;
}

.line {
  color: red;
  margin-top: 20px;
}

.labelFix {
  font-size: 10px;
  font-weight: 800;
}
</style>
