<template>
  <header>
    <h1 class="site-title">
      <NuxtLink to="/" title="a recipe blog for folks half a bubble off">
        Cooking with the Hathaways
      </NuxtLink>
    </h1>
    <p class="site-description">a recipe blog for folks half a bubble off</p>
  </header>
</template>

<style lang="scss">
header {
  text-align: center;
  padding: 1.2em 0;
  border-bottom: solid 1px #f0f0f0;
}

.site-title a {
  font-family: "annie-use-your-telescope" cursive;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: -1px;
  line-height: 1.2;
  font-size: 85px;
  margin: 0;
}

.site-description {
  margin: 0 0;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  color: #979797;
}
</style>
