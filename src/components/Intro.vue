<template>
    <article>
        <header>
            <h1>Christian Tallhamn</h1>
        </header>
        <section>
            <p>En man bland pojkar, en legend bland stjärnor. En skinka på samhällets julbord.</p>
            <h3><strong>Långskinkan! <blink>{{birthday}}</blink></strong></h3>
        </section>
    </article>
</template>

<script>
import Blink from '@/components/Blink'
export default {
  components: {Blink},
  data() {
    const today = new Date()
    return {
      birthday:
        today.getMonth() === 5 && today.getDate() === 7
          ? 'Grattis på födeseldagen!'
          : ''
    }
  }
}
</script>

<style lang='scss' scoped>
h1 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}
p {
  font-size: 1.2rem;
}
</style>
