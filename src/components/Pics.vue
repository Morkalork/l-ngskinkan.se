<template>
    <article>
        <header>
            <h1>Bilder</h1>
        </header>
        <section v-for='pic in pics' :key='pic.id'>
            <figure>
                <img :src='pic.src' alt='En långskinkebild!' />
                <figcaption>{{pic.caption}}</figcaption>
            </figure>
        </section>
    </article>
</template>

<script>
import TheHappy from '@/assets/the_happy.jpeg'
export default {
  data() {
    return {
      pics: [
        {
          id: 1,
          src: TheHappy,
          caption: 'Så här glad är du om du är en Långskinka!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  box-shadow: 0 0 1rem #000;
  max-width: 80%;
  margin: 0.5 auto;
}
</style>
