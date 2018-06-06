<template>
    <article class='testimonials'>
        <header>
            <h1>Testimonials</h1>
        </header>
        <section v-for='(testimonial, index) in testimonials' class='testimonial' :key='index'>
            <div class='thumb'>
                <figure>
                    <img :src='testimonial.img' alt='A ninja' />
                </figure>
            </div>
            <div class='text'>
                <p class='line'>{{testimonial.line}}</p>
                <p class='signum'> - {{testimonial.signum}}</p>
            </div>
        </section>
    </article>
</template>

<script>
import Ninja1 from '@/assets/ninja1.png'
import Ninja2 from '@/assets/ninja2.png'
import Ninja3 from '@/assets/ninja3.png'

export default {
  data () {
    return {
      testimonials: [
        {
          img: Ninja1,
          line: 'Vilken kille, vilken skinka!',
          signum: 'Magnus Ferm'
        },
        {
          img: Ninja2,
          line: 'I vanliga fall undviker jag skinka men för långskinkan gör man ett undantag',
          signum: 'The Agron'
        },
        {
          img: Ninja3,
          line: 'Varje gång Långskinkan kramar mig glömmer jag varför jag gick in i rummet',
          signum: 'Martin Lindström'
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
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px){
    max-width: 80%;
  }
  .testimonial {
    display: flex;
    flex-direction: row;
    text-align: left;
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
          font-size: 1.2rem;
        }
        &.signum {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
