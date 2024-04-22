<template>
  <div class="columns is-mobile">
    <div class="column container">
      <br />
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="control">
              <span style="color: #ff0000" class="icon is-small is-left">
                <i class="far fa-bookmark"></i>
              </span>
              <span style="font-weight: bold; color: #ff8c00"
                >Danh mục Tỷ lệ hưởng</span
              >
            </div>
            <div style="margin-top: 20px">
              <div class="columns">
                <div class="column">
                  <div class="titleKk">
                    <hr class="line" />
                    <div class="topleft">
                      <span style="color: red; font-weight: 700">1.</span> Tỷ lệ
                      hỗ trợ cho AR - BHYT Hộ gia đình làm nông lâm MSTB
                    </div>
                  </div>
                  <div class="table_wrapper">
                    <table
                      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                    >
                      <thead style="font-weight: bold">
                        <tr style="font-size: small; background-color: #4169e1">
                          <td
                            style="color: azure; text-align: center; width: 3%"
                          >
                            STT
                          </td>
                          <td
                            style="color: azure; text-align: center; width: 20%"
                          >
                            Tỷ lệ Ngân sách trung ương (%)
                          </td>
                          <td
                            style="color: azure; text-align: center; width: 20%"
                          >
                            Tỷ lệ Ngân sách địa phương (%)
                          </td>
                          <td
                            style="color: azure; text-align: center; width: 20%"
                          >
                            Tỷ lệ Hỗ trợ khác (%)
                          </td>
                          <td
                            style="color: azure; text-align: center; width: 10%"
                          >
                            Kích hoạt
                          </td>
                          <td style="color: azure; text-align: center">
                            Ghi chú
                          </td>
                          <td style="color: azure; text-align: center">
                            Chức năng
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          style="font-size: small"
                          v-for="(item, index) in tylehotroar"
                          :key="index"
                        >
                          <td style="text-align: center">
                            {{ index + 1 }}
                          </td>
                          <td style="text-align: center">
                            {{ item.tylengansachtw }}
                          </td>
                          <td style="text-align: center">
                            {{ item.tylenngansachdp }}
                          </td>
                          <td style="text-align: center">
                            {{ item.tylehotrokhac }}
                          </td>
                          <td style="text-align: center">
                            <template v-if="item.active == true">
                              <span>
                                <i
                                  style="color: #00947e"
                                  class="fa fa-circle"
                                ></i>
                              </span>
                            </template>
                            <template v-else>
                              <span>
                                <i
                                  style="color: #ffd863"
                                  class="fa fa-circle"
                                ></i>
                              </span>
                            </template>
                          </td>
                          <td style="text-align: center">
                            {{ item.ghichu }}
                          </td>
                          <td
                            style="text-align: center; vertical-align: middle"
                          >
                            <a>
                              <span class="icon is-small">
                                <i
                                  style="color: hsl(153deg, 53%, 53%)"
                                  class="fas fa-check-circle"
                                ></i>
                              </span>
                            </a>
                            &nbsp;
                            <a>
                              <span class="icon is-small">
                                <i
                                  style="color: red"
                                  class="far fa-trash-alt"
                                ></i>
                              </span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                <span
                  style="font-size: small; font-weight: bold; color: #00947e"
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
  </div>
</template>

<script>
import { mixinDmBhxh } from "@/mixins/mixinDmBhxh";
export default {
  name: "baohiemxahoi",
  layout: "admin",
  middleware: "auth", // middleware for authentication
  middleware: "super-admin", // middleware for authentication with the admin
  mixins: [mixinDmBhxh],
  data() {
    return {
      isActiveLoading: false,
      tylehotroar: [],
    };
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
    this.loadData();
  },

  methods: {
    async loadData() {
      const res = await this.$axios.get(`/api/danhmucs/tylehotroall`);
      // console.log(res.data);
      this.tylehotroar = res.data;
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
  height: 450px;
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
