<template>
    <article>
        <header>
            <h1>Bilder</h1>
        </header>
        <section v-for='(pic, index) in pics' :key='index'>
            <figure>
                <img :src='pic.src' alt='En långskinkebild!' />
                <figcaption>{{pic.caption}}</figcaption>
            </figure>
        </section>
    </article>
</template>

<script>
import TheHappy from '@/assets/the_happy.jpeg'
import CyborgParty from '@/assets/cyborg-party.jpg'
export default {
  data() {
    return {
      pics: [
        {
          src: TheHappy,
          caption: 'Så här glad är du om du är en Långskinka!'
        },
        {
          src: CyborgParty,
          caption:
            'Så här naturligt "cool" är en Långskinka i sitt naturliga tillstånd.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 3rem 0;
  img {
    box-shadow: 0 0 1rem #000;
    max-width: 80%;
    margin: 0.5 auto;
  }
}
</style>
