<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="footer-row">
            <img
              src="@/assets/logos/an-sinh-bhxh-high-resolution-logo-black-transparent (1).png"
              alt="Your Image"
              width="120"
              height="40"
            />
          </div>
          <div class="footer-row" style="font-size: small; font-weight: 700">
            <span>© 2024</span>
            <span>Term</span>
            <span>Privacy</span>
          </div>
        </div>
        <div class="column">
          <div
            class="footer-row"
            style="font-size: small; font-weight: 700; text-align: center"
          >
            <span 
              >Thiết kế & Phát triển bởi Công ty Sơn Thư Company</span
            >
            <br />
            <span
              >Copyright @2024 | Designed With by
              <span style="font-weight: 900; color: #f96854">司.馬.懿</span></span
            >
          </div>
        </div>
        <div class="column footer-right">
          <div class="footer-right">
            <div class="footer-row">
              <i
                class="fab fa-facebook"
                style="font-size: 20px; margin-right: 10px"
              ></i>
              <i
                class="fab fa-twitter"
                style="font-size: 20px; margin-right: 10px"
              ></i>
              <i
                class="fab fa-instagram"
                style="font-size: 20px; margin-right: 10px"
              ></i>
            </div>
            <div class="footer-row" style="font-size: small; font-weight: 700">
              <span>About</span>
              <span>FAQ</span>
              <span>Contact</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 20px 0;
}

.footer .columns {
  justify-content: space-between;
}

.footer .column {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Căn bên trái */
}

.footer .footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-row {
  margin-bottom: 10px;
}
</style>
