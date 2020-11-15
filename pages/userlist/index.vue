<template>
    <div class="container">
        <div>
          <h1 class="title">Kullanıcılar</h1>
            <div class="search">
              <input class="search-input" @input="searchFiltered" type="text" placeholder="Anahtar Kelime" v-model="query">
              <input class="search-input" @input="searchFiltered" type="text" placeholder="Kullanıcı Adı" v-model="username">
            </div>
          <ul v-for="(item,index) in userList" :key="index" class="link-title">
            <li class="title user-title" v-text="item.name"  @click="showUsers(item.id)"></li>
          </ul>
        </div>
    </div>
</template>

<script>
import "~/pages/sass/userStyle.sass";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      query: "",
      userList: [],
    };
  },
  computed: {
    ...mapGetters(["filteredKeyword", "filteredUserName", "getUsers"]),
  },
  mounted() {
    this.userList = this.getUsers;
  },
  methods: {
    searchFiltered() {
      if (this.query) {
        this.$store.dispatch("searchKeyword", this.query);
        this.userList = this.filteredKeyword;
      } else {
        this.$store.dispatch("searchKeyword", this.username);
        this.userList = this.filteredUserName;
      }
    },
    showUsers(val) {
      this.$router.push("/userlist/" + val);
    },
  },
};
</script>