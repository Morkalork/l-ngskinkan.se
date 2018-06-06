<template>
    <article class='testimonials'>
        <header>
            <h1>Testimonials</h1>
        </header>
        <section v-for='testimonial in testimonials' class='testimonial' :key='testimonial.id'>
            <div class='thumb'>
                <figure>
                    <img :src='testimonial.img' alt='A ninja' />
                </figure>
            </div>
            <div class='text'>
                <p class='line'>Vilken kille!</p>
                <p class='signum'> - Magnus Ferm</p>
            </div>
        </section>
    </article>
</template>

<script>
import Ninja1 from '@/assets/ninja1.png'

export default {
  data () {
    return {
      testimonials: [
        {
          id: 1,
          img: Ninja1,
          line: 'Vilken kille!',
          signum: 'Magnus Ferm'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .testimonial {
    display: flex;
    flex-direction: row;
    img {
      box-shadow: 0 0 1rem #000;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0.25rem;
        &.line {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.5rem;
        }
        &.signum {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
