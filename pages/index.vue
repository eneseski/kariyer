<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        case
      </h1>
      <h2 class="subtitle">
        Enes ESKİ
      </h2>
      <div class="links">
        <a
          href="/userlist"
          class="button--green"
        >
          Kullanıcılar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "~/pages/sass/userStyle.sass";
import Logo from "~/components/Logo.vue";
import { store } from "./../store/index";

export default {
  components: {
    Logo,
  },
};
</script>

