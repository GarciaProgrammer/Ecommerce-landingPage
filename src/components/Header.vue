<template>
  <nav>
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="logo"> 
        <img src="@/assets/images/logo.png" alt="" />
      </router-link>
      <!-- Links -->
      <div class="links">
        <router-link to="/sobre-nos" active-class="active"> Sobre nós</router-link>
        <router-link to="/clothes" active-class="active"> Roupas </router-link>
        <router-link to="/accessories" active-class="active"> Acessórios </router-link>
        <router-link :to="{ name: 'contact'}" active-class="active"> Contato </router-link>
      </div>
      <!-- Icons -->
      <div class="icons">
        <router-link to="/profile">
          <span class="icon">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z"
              stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
              <path
              d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
              stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </router-link>

        <router-link to="/shopping-cart">
          <span class="icon">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z"
              stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  border-bottom: 2px solid #f8f8f8;
}

nav .nav-inner {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1440px - 170px);
  width: 100%;
  margin: auto;
}

.nav-inner .links a {
  margin: 0px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121212;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}

.links .active{
  background-color: #97b8dd;
  border-radius: 4px;
}

.links .active a{
  color: #FFF;
}

.icons {
  display: flex;
  align-items: center;
}

.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
