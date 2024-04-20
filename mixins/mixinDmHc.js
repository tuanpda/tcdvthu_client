
// export const mixinDmHc = {
//     data() {
//       return {
//         dmtinhthanhpho: [],
//         // dmbenhvien: [],
//       };
//     },
  
//     // Trong mixin
//     async created() {
//       try {
//         // Load các danh mục
//         const promises = [
//           this.loadDanhmuc("/api/danhmucs/dmtinh", "dmtinhthanhpho"),
//         ];
//         // Chờ tất cả các promise hoàn thành
//         await Promise.all(promises);
//         // Khi tất cả các danh mục đã được tải, gửi sự kiện thông báo
//         this.$emit("danhmucs-loaded");
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     methods: {
//       async loadDanhmuc(url, propertyName) {
//         try {
//           const response = await this.$axios.get(url);
//           this[propertyName] = response.data;
//         } catch (error) {
//           console.log(error);
//         }
//       },
//     },
//   };
  