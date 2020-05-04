<template>
  <div class="socials">
  <a href="https://github.com/DaanWet">
    <figure>
      <img src="../assets/GitHub-Mark-120px-plus.png" alt="Github logo"/>
      <figcaption>
        My GitHub Profile
      </figcaption>
    </figure>
  </a>
  <a href="https://steamcommunity.com/profiles/76561198185927173/">
    <figure>
      <img src="../assets/steam-logo-transparent.png" alt="Steam logo"/>
      <figcaption>
        My Steam Profile
      </figcaption>
    </figure>
  </a>
  <a href="https://discord.gg/9EncUC5">
    <figure>
      <img src="../assets/Discord-Logo-Color.svg" alt="Discord logo"/>
      <figcaption>
        Come chat with me on Discord
      </figcaption>
    </figure>
  </a>
  <a href="https://www.facebook.com/Dazed00">
    <figure>
      <img src="../assets/facebook-logo.png" alt="Discord logo"/>
      <figcaption>
        My Facebook Page
      </figcaption>
    </figure>
  </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.socials {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px 150px;
}
.socials a {
  text-align: center;
  margin: auto;
  text-decoration: none;
  color:black
}

figure img{
  width: 100px;
}


figcaption {
  margin-top: 10px
}
</style>