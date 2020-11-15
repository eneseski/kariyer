<template>
    <div class="container">
        <div>
            <h1 class="title">Kullanıcı Detayı</h1>
            <ul class="result-title">
                <li>
                    <h4>Adı:</h4>
                    <p v-text="user.name"></p>
                </li>
                <li>
                    <h4>Kullanıcı Adı:</h4>
                    <p v-text="user.username"></p>
                </li>
                <li>
                    <h4>Mail:</h4>
                    <p v-text="user.email"></p>
                </li>
                <li>
                    <h4>Telefon:</h4>
                    <p v-text="user.phone"></p>
                </li>
                <li>
                    <h4>Website:</h4>
                    <p v-text="user.website"></p>
                </li>
            </ul>
             <a href="/userlist" class="button--green">Geri Dön</a>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import "~/pages/sass/userStyle.sass";

export default {
  data() {
    user: [];
  },
  asyncData(val) {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/" + val.params.userId)
      .then((response) => {
        return {
          user: response.data,
        };
      })
      .catch((error) => {
        console.log("Problem var, serverda. Uyarı göster kullanıcıya", error);
      });
  },
};
</script>