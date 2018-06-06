<template>
    <article>
        <header>
            <h1>Christian Tallhamn</h1>
        </header>
        <section>
            <p>En man bland pojkar, en legend bland stjärnor. En skinka på samhällets julbord.</p>
            <h3><strong>Långskinkan! {{birthday}}</strong></h3>
        </section>
    </article>
</template>

<script>
export default {
  data () {
    const today = new Date()
    return {
      birthday: (today.getMonth() === 5 && today.getDate() === 6) ? 'Grattis på födeseldagen!' : ''
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
