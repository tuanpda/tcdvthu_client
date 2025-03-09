<template>
  <div>
    <v-select
      :options="options"
      v-model="selected"
      label="tenbenhvien"
      :reduce="(option) => option.mabenhvien"
      placeholder="Tìm kiếm..."
    ></v-select>
    <p>Giá trị được chọn: {{ selected }}</p>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: { vSelect },
  data() {
    return {
      options: [
        { tenbenhvien: "Bệnh viện Bạch Mai", mabenhvien: "BM001" },
        { tenbenhvien: "Bệnh viện Việt Đức", mabenhvien: "VD002" },
        { tenbenhvien: "Bệnh viện Nhi", mabenhvien: "BN003" },
      ],
      selected: null, // Giá trị sẽ là mabenhvien khi chọn
    };
  },
};
</script>
